import React from 'react';

export const NewItemForm = ({ addNewItem }) => {
  const [itemTitle, setItemTitle] = React.useState('');

  const handleChange = ({ target }) => {
    setItemTitle(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewItem(itemTitle);
    setItemTitle('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="get"
      action="https://bakhti.com/api/addnewitem"
    >
      <input
        type="text"
        placeholder="New item"
        onChange={handleChange}
        value={itemTitle}
      />
      <button type="submit">Add</button>
    </form>
  );
};
