import actionTypes from './user.types';

/* Action to set current user */
export const setCurrentUser = (payload) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload,
  };
};
