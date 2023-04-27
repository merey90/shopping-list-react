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

  const fetchUser = React.useCallback(async () => {
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/users/${userId}/todos`
    );
    const shoppingListData = await response.json();
    setShoppingList(shoppingListData);
  }, [userId]);

  React.useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleAddNewItem = async (newItemTitle) => {
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/todos/${userId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newItemTitle }),
      }
    );
    const shoppingItemData = await response.json();
    if (!shoppingItemData.taskId)
      alert("New item wasn't added to the Database");
    else fetchUser();
  };

  const handleChangeItem = async (id) => {
    const item = shoppingList.find((shopping) => shopping._id === id);
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/todos/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ done: !item.done }),
      }
    );
    const shoppingItemData = await response.json();
    if (!shoppingItemData.taskId)
      alert("Item property wasn't changed on the Database");
    else fetchUser();
  };

  const handleDeleteItem = async (id) => {
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/todos/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const shoppingItemData = await response.json();
    if (!shoppingItemData.taskId)
      alert('Item property was deleted on the Database');
    else fetchUser();
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
              deleteItem={handleDeleteItem}
            />
            <hr />
          </>
        )}
        <NewItemForm addNewItem={handleAddNewItem} />
      </Box>
    </Paper>
  );
};
