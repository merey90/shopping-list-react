import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

export const ShoppingList = ({ shoppingList, changeItem }) => {
  const handleChange = (id) => {
    changeItem(id);
  };

  return (
    <ul>
      {shoppingList.map((shopping) => {
        return (
          <li key={shopping.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={shopping.done}
                  onChange={() => handleChange(shopping.id)}
                  color="primary"
                />
              }
              label={shopping.title}
            />
          </li>
        );
      })}
    </ul>
  );
};
