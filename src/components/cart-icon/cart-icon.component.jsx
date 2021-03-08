import React from 'react';
import { connect } from 'react-redux';

/* Styling */
import './cart-icon.styles.scss';

/* Assets */
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

/* Actions */
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = (props) => {
  const { toggleCartHidden } = props;
  return (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
