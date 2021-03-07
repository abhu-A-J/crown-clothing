import React, { useEffect } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

/* Pages */
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

/* Components */
import Header from './components/header/header.component';

/* Firebase */
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/* Actions */
import { setCurrentUser } from './redux/user/user.actions';

function App(props) {
  const { setCurrentUser } = props;

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // live updates come back
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unSubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(App);
