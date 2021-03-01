import React, { useEffect, useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

/* Pages */
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

/* Components */
import Header from './components/header/header.component';

/* Firebase */
import { auth } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
    });

    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
