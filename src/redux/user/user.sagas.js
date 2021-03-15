import { takeLatest, put, call, all } from 'redux-saga/effects';

/* Action Types */
import actionTypes from './user.types';

/* Actions */
import { signInFailure, signInSuccess } from './user.actions';

/* Firebase Utils */
import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';

/* Common generator for getting snapshot */
export function* getSnapShotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
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

/* Exported to root sagas */
export function* userSaga() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
