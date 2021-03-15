import { takeLatest, put, call, all } from 'redux-saga/effects';

/* Action Types */
import actionTypes from './user.types';

/* Actions */
import {
  googleSignInFailure,
  googleSignInSuccess,
  emailSignInSuccess,
  emailSignInFailure,
} from './user.actions';

/* Firebase Utils */
import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';

/* Google Sign In*/
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    const userRef = yield call(createUserProfileDocument, user);

    const userSnapshot = yield userRef.get();

    yield put(googleSignInSuccess(userSnapshot));
  } catch (err) {
    yield put(googleSignInFailure(err.message));
  }
}



/* Saga to sign in with email and password */
export function* signInWithEmailAndPassword({payload}) {
	const {email,password}=payload;

	try{
		const {user}=yield auth.signInWithEmailAndPassword(email,password);
		const userRef = yield call(createUserProfileDocument, user);

    const userSnapshot = yield userRef.get();

    yield put(emailSignInSuccess(userSnapshot));

	}catch(err){
		yield put(emailSignInFailure(err.message))
	}

}


/* ****************************** */
/*  		Main sagas Listeners 			*/
/* ****************************** */

/* Listener for gogle sign in start */
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
