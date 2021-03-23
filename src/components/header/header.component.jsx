import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { gql, useQuery } from '@apollo/client';

/* Styling */
import './header.styles.scss';

import { connect } from 'react-redux';

/* Assets */
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

/* Components */
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

/* Selectors */
import { selectCurrentUser } from '../../redux/user/user.selectors';

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const Header = (props) => {
  const { currentUser } = props;

  const { data } = useQuery(GET_CART_HIDDEN);

  const { toggleCartHidden: hidden } = data;

  return (
    <div className="header">
      <Link to="/" className="link-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(Header);
