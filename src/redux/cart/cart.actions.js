import actionTypes from './cart.types';

/* Action to toggle cart */
export const toggleCartHidden = () => {
  return {
    type: actionTypes.TOGGLE_CART_HIDDEN,
  };
};

/* Action to add item to cart */
export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item,
  };
};

/* Action to remove item */
export const removeItem = (item) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: item,
  };
};

/* Action to remove item from cart */
export const clearItemFromCart = (item) => {
  return {
    type: actionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

/* Action to clear cart */
export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};
