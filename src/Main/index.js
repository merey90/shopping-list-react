import React from 'react';
import { ShoppingList } from '../ShoppingList';
import { NewItemForm } from '../NewItemForm';
import { Filtering } from '../Filtering';

export const Main = () => {
  const [showAll, setShowAll] = React.useState(false);
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
    const newShoppingList = [...shoppingList];
    const item = newShoppingList.find((shopping) => shopping.id === id);
    item.done = !item.done;
    setShoppingList(newShoppingList);
  };

  return (
    <main>
      <Filtering showAll={showAll} setShowAll={setShowAll} />
      <ShoppingList
        showAll={showAll}
        shoppingList={shoppingList}
        changeItem={handleChangeItem}
      />
      <hr />
      <NewItemForm addNewItem={handleAddNewItem} />
    </main>
  );
};
