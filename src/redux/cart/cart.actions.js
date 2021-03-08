import actionTypes from './cart.types';

/* Action to toggle cart */
export const toggleCartHidden = () => {
  return {
    type: actionTypes.TOGGLE_CART_HIDDEN,
  };
};
