import React from 'react';

import { apiService } from '../../services';

import { Users } from './Users';

export const UsersContainer: React.FC = () => {

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    apiService.get('users')
      .then((response) => setUsers(response.data))
  });

  return (
    <Users users={ users }/>
  );
};