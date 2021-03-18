import { takeLatest, put, call, all } from 'redux-saga/effects';

/* Action Types */
import actionTypes from './user.types';

/* Actions */
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from './user.actions';

/* Firebase Utils */
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';

/* Common generator for getting snapshot */
export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess(userSnapshot));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

/* Google Sign In*/
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

/* Saga to sign in with email and password */
export function* signInWithEmailAndPassword({ payload }) {
  const { email, password } = payload;

  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);

    const userSnapshot = yield userRef.get();

    yield put(signInSuccess(userSnapshot));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) {
      return;
    }
    yield call(getSnapShotFromUserAuth, userAuth);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err.message));
  }
}

export function* signUpStart({ payload }) {
  const { email, password, displayName } = payload;
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (err) {
    yield put(signUpFailure(err.message));
  }
}

export function* signInAfterSignUp({ payload }) {
  const { user, additionalData } = payload;
  yield getSnapShotFromUserAuth(user, additionalData);
}

/* ****************************** */
/*  		Main sagas Listeners 			*/
/* ****************************** */

/* Listener for google sign in start */
export function* onGoogleSignInStart() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

/* Listner for email sign in start */
export function* onEmailSignInStart() {
  yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword);
}

export function* onCheckUserSession() {
  yield takeLatest(actionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(actionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(actionTypes.SIGN_UP_START, signUpStart);
}

export function* onSignUpSuccess() {
  yield takeLatest(actionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

/* Exported to root sagas */
export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
