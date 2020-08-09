import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import './styles.css';

export const ShoppingList = ({ showAll, shoppingList, changeItem }) => {
  const handleChange = (id) => {
    changeItem(id);
  };

  return (
    <ul className="shopping-list">
      {shoppingList.map((shopping) => {
        if (!showAll && shopping.done) {
          return null;
        }

        return (
          <li key={shopping._id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={shopping.done}
                  onChange={() => handleChange(shopping._id)}
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
