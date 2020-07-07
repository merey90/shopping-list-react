import React from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';

export const NewItemForm = ({ addNewItem }) => {
  const [itemTitle, setItemTitle] = React.useState('');

  const handleChange = ({ target }) => {
    setItemTitle(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // pustye stroki i probely ne dobavlyaem
    if (!itemTitle.trim()) return;
    addNewItem(itemTitle.trim());
    setItemTitle('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="get"
      action="https://bakhti.com/api/addnewitem"
    >
      <Box display="flex" mt={2}>
        <TextField label="New item" onChange={handleChange} value={itemTitle} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
        >
          Add
        </Button>
      </Box>
    </form>
  );
};
