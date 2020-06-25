import React from "react";
import { ShoppingList } from "../ShoppingList";
import { NewItemForm } from "../NewItemForm";

export const Main = () => {
  const [shoppingList, setShoppingList] = React.useState([
    {
      id: 0,
      title: "Banana",
      done: true,
    },
    {
      id: 1,
      title: "Apple2",
      done: false,
    },
    {
      id: 2,
      title: "Milk",
      done: false,
    },
  ]);

  const handleAddNewItem = (newShoppingItem) => {
    // ... - spread operator, rasformirovyvaet massiv
    setShoppingList([...shoppingList, newShoppingItem]);
  };

  return (
    <main>
      <ShoppingList shoppingList={shoppingList} />
      <hr />
      <NewItemForm newId={shoppingList.length} addNewItem={handleAddNewItem} />
    </main>
  );
};
