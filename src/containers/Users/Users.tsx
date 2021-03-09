import React from 'react';

import { styled } from '../../styles';
import { useModal } from '../../hooks';

import { UserCard } from './UserCard';
import { UserModalContent } from './UserModalContent';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 75px);
  overflow-y: scroll;
`;

type IUsersAddress = {
  city: string,
  street: string,
  suite?: string,
  zipcode?: string,
};

export type IUsersItem = {
  id: number,
  name: string,
  email: string,
  address: IUsersAddress,
  phone: string,
  website?: string,
}

interface IUsersProps {
  users: IUsersItem[];
  selectedUser: IUsersItem | object;
  setSelectedUserId: (id: number) => void;
}

export const Users: React.FC<IUsersProps> = props => {
  const { users, selectedUser, setSelectedUserId } = props;

  const { closeModal: closeUserModal, openModal: openUserModal, Modal: UserModal } = useModal();

  return (
    <Wrapper>
      { users.map((item) =>
        <UserCard
          id={ item.id }
          name={ item.name }
          email={ item.email }
          city={ item.address.city }
          street={ item.address.street }
          phone={ item.phone }
          setSelectedUserId={setSelectedUserId}
          onUserCardClick={ openUserModal }
        />
      ) }
      <UserModal>
        <UserModalContent selectedUser={ selectedUser } onCloseClick={ closeUserModal }/>
      </UserModal>
    </Wrapper>
  );
};
