import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography component={Link} variant="h6" to="/">
        Shopping List
      </Typography>
      <Box display="flex" justifyContent="flex-end" flexGrow="1">
        <Button component={Link} color="secondary" to="/">
          Home
        </Button>
        <Button component={Link} color="secondary" to="/about">
          About
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);
