import React from 'react';
import {
  Checkbox,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import './styles.css';

export const ShoppingList = ({
  showAll,
  shoppingList,
  changeItem,
  deleteItem,
}) => (
  <List>
    {shoppingList.map((shopping) => {
      if (!showAll && shopping.done) {
        return null;
      }

      return (
        <ListItem
          dense
          key={shopping._id}
          onClick={() => changeItem(shopping._id)}
        >
          <ListItemIcon>
            <Checkbox edge="start" checked={shopping.done} disableRipple />
          </ListItemIcon>
          <ListItemText primary={shopping.title} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteItem(shopping._id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    })}
  </List>
);
