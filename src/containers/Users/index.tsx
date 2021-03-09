import React from 'react';

import { apiService } from '../../services';

import { Users, IUsersItem } from './Users';

export const UsersContainer: React.FC = () => {

  const [users, setUsers] = React.useState([]);
  const [selectedUserId, setSelectedUserId] = React.useState(0)

  React.useEffect(() => {
    apiService.get('users')
      .then((response) => setUsers(response.data))
  }, []);

  const selectedUser = React.useMemo(() => users.find((item: IUsersItem) => item.id === selectedUserId), [selectedUserId]);

  return (
    <Users
      users={ users }
      selectedUser={selectedUser || null}
      setSelectedUserId={ setSelectedUserId }
    />
  );
};
