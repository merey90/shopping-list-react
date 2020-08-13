import React from 'react';
import {
  FormControlLabel,
  Checkbox,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
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
        <ListItem dense key={shopping._id}>
          <FormControlLabel
            control={
              <Checkbox
                checked={shopping.done}
                onChange={() => changeItem(shopping._id)}
                color="primary"
              />
            }
            label={shopping.title}
          />
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
