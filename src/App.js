import React from "react";

import "./App.css";
import { ShoppingList } from "./ShoppingList";
import { NewItemForm } from "./NewItemForm";

const App = () => {
  const [shoppingList, setShoppingList] = React.useState([
    {
      id: 0,
      title: "Banana",
      done: true,
    },
    {
      id: 1,
      title: "Apple",
      done: false,
    },
    {
      id: 2,
      title: "Milk",
      done: false,
    },
  ]);

  const handleAddNewItem = (newShoppingItem) => {
    setShoppingList([...shoppingList, newShoppingItem]);
  };
  console.log("shoppingList: ", shoppingList);

  return (
    <div className="App">
      <ShoppingList shoppingList={shoppingList} />
      <hr />
      <NewItemForm newId={shoppingList.length} addNewItem={handleAddNewItem} />
    </div>
  );
};

export default App;
