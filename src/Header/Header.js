import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';

import './styles.css';

export const Header = () => (
  <Box mb={2}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          color="inherit"
          className="header-title"
          component={Link}
          variant="h6"
          to="/"
        >
          Shopping List
        </Typography>
        <Box display="flex" justifyContent="flex-end" flexGrow={1}>
          <Button component={Link} color="inherit" to="/about">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);
