import React from 'react';
import axios from 'axios';

import { Users } from './Users';

export const UsersContainer: React.FC = () => {

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data));
  });

  return (
      <Users users={users}/>
  );
};