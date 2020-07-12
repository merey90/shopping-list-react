import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main } from './Main';
import { Header } from './Header/Header';
import { About } from './About';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
