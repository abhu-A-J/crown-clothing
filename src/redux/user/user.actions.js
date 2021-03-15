import actionTypes from './user.types';

/* Action to set current user */
export const setCurrentUser = (payload) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload,
  };
};

/* Google signin start */
export const googleSignInStart = () => {
  return {
    type: actionTypes.GOOGLE_SIGN_IN_START,
  };
};

/* Google signin start */
export const googleSignInSuccess = (user) => {
  return {
    type: actionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
  };
};

/* Google signin start */
export const googleSignInFailure = (err) => {
  return {
    type: actionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: err,
  };
};

/* Email signin start */
export const emailSignInStart = (emailAndPassword) => {
  return {
    type: actionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

/* Email signin start */
export const emailSignInSuccess = (user) => {
  return {
    type: actionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user,
  };
};

/* Email signin start */
export const emailSignInFailure = (err) => {
  return {
    type: actionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: err,
  };
};
