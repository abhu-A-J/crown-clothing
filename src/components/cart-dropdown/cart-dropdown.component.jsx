import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

/* Styling */
import './cart-dropdown.styles.scss';

/* Child Components */
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

/* Selectors */
import { selectCartItems } from '../../redux/cart/cart.selectors';

/* Actions */
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">You cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
