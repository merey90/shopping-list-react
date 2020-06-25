import React from "react";

import "./App.css";
import { ShoppingList } from "./ShoppingList";
import { NewItemForm } from "./NewItemForm";
import { Main } from "./Main";
import { Header } from "./Header/Header";

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
    // ... - spread operator, rasformirovyvaet massiv
    setShoppingList([...shoppingList, newShoppingItem]);
  };

  return (
    <div className="App">
      <Main />
      <Header />
      <ShoppingList shoppingList={shoppingList} />
      <hr />
      <NewItemForm newId={shoppingList.length} addNewItem={handleAddNewItem} />
    </div>
  );
};

export default App;
