import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../store/types';
import { IUsersItem } from '../../store/users';
import { setUsersAction } from '../../store/users';

import { Users } from './Users';

export const UsersContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { users, searchUsers, onSearchByNameChange, onSearchByEmailChange } = useSelector((state: IStore) => state.users);
  const [selectedUserId, setSelectedUserId] = React.useState<number>(0)

  React.useEffect(() => {
    dispatch(setUsersAction())
  }, [dispatch]);

  const selectedUser = React.useMemo(() => users.find((item: IUsersItem) => item.id === selectedUserId)
    || null, [selectedUserId]);

  return (
    <Users
      users={ onSearchByNameChange  || onSearchByEmailChange ? searchUsers : users }
      selectedUser={ selectedUser }
      setSelectedUserId={ setSelectedUserId }
    />
  );
};
