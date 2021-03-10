import actionTypes from './cart.types';

/* Utilities */
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN: {
      return {
        ...state,
        hidden: !state.hidden,
      };
    }

    case actionTypes.ADD_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    }

    case actionTypes.REMOVE_ITEM: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    }

    case actionTypes.CLEAR_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;
