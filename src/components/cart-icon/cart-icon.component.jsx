import React from 'react';
import { connect } from 'react-redux';

/* Styling */
import './cart-icon.styles.scss';

/* Assets */
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

/* Actions */
import { toggleCartHidden } from '../../redux/cart/cart.actions';

/* Selectors */
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = (props) => {
  const { toggleCartHidden, cartItemsCount } = props;
  return (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItemsCount: selectCartItemsCount(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
