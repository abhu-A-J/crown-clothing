import { createSelector } from 'reselect';

/* Select cart from state */
const selectCart = (state) => state.cart;

/* Select cartItems from cart */
export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);

/* Select total cart Items */
export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0)
);

/* Select the hidden state of cart dropdown */
export const selectCartHidden = createSelector(
  selectCart,
  (cart) => cart.hidden
);

/* Select cart total price */
export const selectCartTotal = createSelector(selectCartItems, (cartItems) => {
  if (!cartItems.length) {
    return 0;
  }

  return cartItems.reduce((totalPrice, cartItem) => {
    return totalPrice + cartItem.quantity * cartItem.price;
  }, 0);
});
