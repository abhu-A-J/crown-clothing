import React from 'react';
import { connect } from 'react-redux';

/* Styling */
import './cart-dropdown.styles.scss';

/* Child Components */
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

/* Selectors */
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropdown);
