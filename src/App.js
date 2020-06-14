import React from 'react';

import './App.css';
import { ShoppingList } from './ShoppingList';

const shoppingList = [
  {
    id: 1,
    title: 'Banana',
    done: true, 
  },
  {
    id: 2,
    title: 'Apple',
    done: false, 
  },
  {
    id: 3,
    title: 'Milk',
    done: false, 
  },
]

const App = () => {
  return (
    <div className="App">
      <ShoppingList shoppingList={shoppingList} />
    </div>
  );
}

export default App;
