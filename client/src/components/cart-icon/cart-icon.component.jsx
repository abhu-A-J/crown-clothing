import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
