import React from 'react';
import { Users } from '../Users';
import { Shopping } from '../Shopping';
import { Box } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

export const Main = () => (
  <Box display="flex">
    <Users />
    <Box flexGrow={1}>
      <Switch>
        <Route path="/:userId">
          <Shopping />
        </Route>
        <Route path="/">
          <h1> Please select user </h1>
        </Route>
      </Switch>
    </Box>
  </Box>
);
