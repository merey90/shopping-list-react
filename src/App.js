import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Paper, Box } from '@material-ui/core';

import { Shopping } from './Shopping';
import { Header } from './Header/Header';
import { About } from './About';
import { Users } from './Users';
import { User } from './User';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <Paper>
          <Box p={2}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/users">
                <Users />
              </Route>
              <Route path="/users/:userId">
                <User />
              </Route>
              <Route path="/">
                <Shopping />
              </Route>
            </Switch>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default App;
