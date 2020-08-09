import React from 'react';
import { Box, Paper, Tabs, Tab } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

export const Users = () => {
  const { pathname } = useLocation();
  const tab = pathname.slice(1) || false;
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
    <Box display="flex" flexDirection="column" mr={3}>
      <Paper>
        <Box p={2}>
          <Tabs orientation="vertical" value={tab}>
            {users.map((user) => (
              <Tab
                component={Link}
                to={`/${user._id}`}
                key={user._id}
                value={user._id}
                label={`${user.name} ${user.surname}`}
              />
            ))}
          </Tabs>
        </Box>
      </Paper>
    </Box>
  );
};
