import React from 'react';
import { useParams } from 'react-router-dom';

import { apiService } from '../../services';
import { useModal } from '../../hooks/useModal';

import { UserModalContent } from './UserModalContent';
import { Users, IUsersItem } from './Users';


type IFindSelectedUser = (users: IUsersItem[], id: string) => IUsersItem | object;
const findSelectedUser: IFindSelectedUser = (users, id) => users.find((item: IUsersItem) => item.id === +id)
  || { message: 'user not found' };

interface IParamsProps {
  id: string;
}

export const UsersContainer: React.FC = () => {

  const [users, setUsers] = React.useState([]);

  const { id }: any = useParams();

  const UserModal = useModal();

  React.useEffect(() => {
    apiService.get('users')
      .then((response) => setUsers(response.data))
  }, []);

  return (
    <>
      <UserModal.Modal>
        <UserModalContent selectedUser={ findSelectedUser(users, id) } onCloseClick={ UserModal.closeModal }/>
      </UserModal.Modal>
      <Users users={ users } onUserCardClick={ UserModal.openModal }/>
    </>
  );
};
