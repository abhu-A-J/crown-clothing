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
