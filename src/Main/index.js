import React from 'react';
import { ShoppingList } from '../ShoppingList';
import { NewItemForm } from '../NewItemForm';

export const Main = () => {
  const [shoppingList, setShoppingList] = React.useState([
    {
      id: 0,
      title: 'Banana',
      done: true,
    },
    {
      id: 1,
      title: 'Apple',
      done: false,
    },
    {
      id: 2,
      title: 'Milk',
      done: false,
    },
  ]);

  const handleAddNewItem = (newItemTitle) => {
    const newItem = {
      id: shoppingList.length,
      title: newItemTitle,
      done: false,
    };

    setShoppingList([...shoppingList, newItem]);
  };

  const handleChangeItem = (id) => {
    const item = shoppingList.find((shopping) => shopping.id === id);
    item.done = !item.done;

    console.log(item);
  };

  return (
    <main>
      <ShoppingList shoppingList={shoppingList} changeItem={handleChangeItem} />
      <hr />
      <NewItemForm addNewItem={handleAddNewItem} />
    </main>
  );
};
