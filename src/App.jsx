import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

/* Pages */
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';

/* Components */
import Header from './components/header/header.component';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
