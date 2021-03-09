import React from 'react';

import { apiService } from '../../services';

import { Users, IUsersItem } from './Users';


type IFindSelectedUser = (users: IUsersItem[], id: number) => IUsersItem | object;
const findSelectedUser: IFindSelectedUser = (users, id) => users.find((item: IUsersItem) => item.id === id)
  || { message: 'user not found' };

export const UsersContainer: React.FC = () => {

  const [users, setUsers] = React.useState([]);
  const [selectedUserId, setSelectedUserId] = React.useState(1)

  React.useEffect(() => {
    apiService.get('users')
      .then((response) => setUsers(response.data))
  }, []);

  return (
    <Users users={ users } selectedUser={findSelectedUser(users, selectedUserId)} setSelectedUserId={setSelectedUserId}/>
  );
};
