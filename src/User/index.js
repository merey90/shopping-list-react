import React from 'react';
import { useParams } from 'react-router-dom';

export const User = () => {
  const [user, setUser] = React.useState({});
  const { userId } = useParams();

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://merey-todo-list.herokuapp.com/api/users/${userId}`
      );
      const userData = await response.json();
      setUser(userData);
    };

    fetchUser();
  }, [userId]);

  if (!user._id) return <h1>Loading...</h1>;

  return (
    <h1>
      {user.name} {user.surname}
    </h1>
  );
};
