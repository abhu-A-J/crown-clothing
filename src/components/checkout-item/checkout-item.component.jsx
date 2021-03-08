import React from 'react';
import { connect } from 'react-redux';

/* Styling */
import './checkout-item.styles.scss';

/* Actions */
import { clearItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, clearItemFromCart }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(CheckoutItem);
