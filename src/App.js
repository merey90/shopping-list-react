import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { Header } from './Header/Header';
import { About } from './About';

import './App.css';
import { Main } from './Main';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Main />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
