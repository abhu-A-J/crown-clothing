import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

/* Styling */
import './header.styles.scss';

import { connect } from 'react-redux';

/* Assets */
import { ReactComponent as Logo } from '../../assets/crown.svg';


/* Components */
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

/* Selectors */
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

/* Actions */
import { signOutStart } from '../../redux/user/user.actions';

const Header = (props) => {
  const { currentUser, hidden, signOutStart } = props;
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
          <div className="option" onClick={() => signOutStart()}>
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
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signOutStart: () => dispatch(signOutStart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
