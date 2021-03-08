/* Utility to add items to cart */

export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) => {
      if (item.id === itemToAdd.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
