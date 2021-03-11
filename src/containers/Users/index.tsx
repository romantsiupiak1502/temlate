import React from 'react';

import { apiService } from '../../services';

import { Users } from './Users';

type IUsersAddress = {
  city: string,
  street: string,
  suite: string,
  zipcode: string,
};

export type IUsersItem = {
  id: number,
  name: string,
  email: string,
  address: IUsersAddress,
  phone: string,
  website: string,
}

export const UsersContainer: React.FC = () => {

  const [users, setUsers] = React.useState<IUsersItem[]>([]);
  const [selectedUserId, setSelectedUserId] = React.useState<number>(0)

  React.useEffect(() => {
    apiService.get('users')
      .then((response) => setUsers(response.data))
  }, []);

  const selectedUser = React.useMemo(() => users.find((item: IUsersItem) => item.id === selectedUserId)
    || null, [selectedUserId]);

  return (
    <Users
      users={ users }
      selectedUser={ selectedUser }
      setSelectedUserId={ setSelectedUserId }
    />
  );
};
