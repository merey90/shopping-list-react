import React from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Box } from '@material-ui/core';

import { ShoppingList } from '../ShoppingList';
import { NewItemForm } from '../NewItemForm';
import { Filtering } from '../Filtering';

export const Shopping = () => {
  const { userId } = useParams();
  const [showAll, setShowAll] = React.useState(false);
  const [shoppingList, setShoppingList] = React.useState([]);

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://merey-todo-list.herokuapp.com/api/users/${userId}/todos`
      );
      const shoppingListData = await response.json();
      setShoppingList(shoppingListData);
    };

    fetchUser();
  }, [userId]);

  const handleAddNewItem = (newItemTitle) => {
    const newItem = {
      _id: shoppingList.length,
      title: newItemTitle,
      done: false,
    };

    setShoppingList([...shoppingList, newItem]);
  };

  const handleChangeItem = (id) => {
    const newShoppingList = [...shoppingList];
    const item = newShoppingList.find((shopping) => shopping._id === id);
    item.done = !item.done;
    setShoppingList(newShoppingList);
  };

  return (
    <Paper>
      <Box p={2}>
        {!!shoppingList.length && (
          <>
            <Filtering showAll={showAll} setShowAll={setShowAll} />
            <ShoppingList
              showAll={showAll}
              shoppingList={shoppingList}
              changeItem={handleChangeItem}
            />
            <hr />
          </>
        )}
        <NewItemForm addNewItem={handleAddNewItem} />
      </Box>
    </Paper>
  );
};
