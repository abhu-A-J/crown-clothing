import React from 'react';

/* Styling */
import './cart-dropdown.styles.scss';

/* Child Components */
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
