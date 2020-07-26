import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Users = () => {
  let [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      'https://merey-todo-list.herokuapp.com/api/users'
    );
    const usersData = await response.json();
    setUsers(usersData);
  };

  if (!users.length) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Users</h1>
      <List>
        {users.map((user) => (
          <ListItem component={Link} to={`/users/${user._id}`} key={user._id}>
            {user.name} {user.surname}
          </ListItem>
        ))}
      </List>
    </>
  );
};
