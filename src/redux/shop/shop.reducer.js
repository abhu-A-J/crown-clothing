import actionTypes from './shop.types.js';

const INITIAL_STATE = {
  collections: {},
};

const shopReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.UPDATE_COLLECTIONS: {
      return {
        ...state,
        collections: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default shopReducer;
