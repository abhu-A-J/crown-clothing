import actionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case actionTypes.EMAIL_SIGN_IN_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        error:null
      };
    }

    case actionTypes.GOOGLE_SIGN_IN_FAILURE:
    case actionTypes.EMAIL_SIGN_IN_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
