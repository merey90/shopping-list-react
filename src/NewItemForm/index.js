import React from "react";

export const NewItemForm = ({ newId, addNewItem }) => {
  const [newItem, setNewItem] = React.useState("");

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleSubmit = (event) => {
    // ne daet otpravit formu po ssylke
    event.preventDefault();

    const newShoppingItem = {
      id: newId,
      title: newItem,
      done: false,
    };

    addNewItem(newShoppingItem);

    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New item"
        name="newItem"
        value={newItem}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};
