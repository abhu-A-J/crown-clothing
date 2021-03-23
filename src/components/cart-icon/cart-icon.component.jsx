import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useMutation,gql } from '@apollo/client';


/* Styling */
import './cart-icon.styles.scss';

/* Assets */
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


/* Selectors */
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartIcon = (props) => {
  const { cartItemsCount } = props;

  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);

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

export default connect(mapStateToProps)(CartIcon);
