import React from 'react';

import { styled } from '../../styles';
import { useModal } from '../../hooks';
import { IUsersItem } from '../../store/users';

import { UserCard } from './UserCard';
import { UserModalContent } from './UserModalContent';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 75px);
  overflow-y: scroll;
`;

interface IUsersProps {
  users: IUsersItem[];
  selectedUser: IUsersItem | null;
  setSelectedUserId: (id: number) => void;
}

export const Users: React.FC<IUsersProps> = props => {
  const { users, selectedUser, setSelectedUserId } = props;

  const { openModal: openUserInfoModal, Modal: UserInfoModal } = useModal();

  return (
    <Wrapper>
      { users.map((item) =>
        <UserCard
          key={ item.id }
          name={ item.name }
          email={ item.email }
          city={ item.address.city }
          street={ item.address.street }
          phone={ item.phone }
          onUserCardClick={ () => {
            setSelectedUserId(item.id);
            openUserInfoModal();
          } }
        />
      ) }
      <UserInfoModal title='User profile' isClosable={ true }>
        <UserModalContent selectedUser={ selectedUser }/>
      </UserInfoModal>
    </Wrapper>
  );
};
