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

/* Action to check if user is signed in or not */
export const checkUserSession = () => {
  return {
    type: actionTypes.CHECK_USER_SESSION,
  };
};

/* When signout start */
export const signOutStart = () => {
  return {
    type: actionTypes.SIGN_OUT_START,
  };
};

/* When signout success */
export const signOutSuccess = () => {
  return {
    type: actionTypes.SIGN_OUT_SUCCESS,
  };
};

/* When signout fails */
export const signOutFailure = (err) => {
  return {
    type: actionTypes.SIGN_OUT_FAILURE,
    payload: err,
  };
};

/* When signup start */
export const signUpStart = (userCredentials) => {
  return {
    type: actionTypes.SIGN_UP_START,
    payload: userCredentials,
  };
};

/* When signup success */
export const signUpSuccess = ({ user, additionalData }) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData },
  };
};

/* When signup failure */
export const signUpFailure = (err) => {
  return {
    type: actionTypes.SIGN_UP_FAILURE,
    payload: err,
  };
};
