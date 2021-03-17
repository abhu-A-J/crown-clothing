import actionTypes from './user.types';

/* Google signin start */
export const googleSignInStart = () => {
  return {
    type: actionTypes.GOOGLE_SIGN_IN_START,
  };
};

/* Email signin start */
export const emailSignInStart = (emailAndPassword) => {
  return {
    type: actionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

/* When sign in is success */
export const signInSuccess = (user) => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};

/* When sign in is success */
export const signInFailure = (err) => {
  return {
    type: actionTypes.SIGN_IN_FAILURE,
    payload: err,
  };
};

export const checkUserSession = () => {
  return {
    type: actionTypes.CHECK_USER_SESSION,
  };
};
