import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

/* Pages */
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
