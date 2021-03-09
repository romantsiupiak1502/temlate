import React from 'react';

import { styled } from '../../../styles';

import { UserAvatarBlock } from './UserAvatarBlock';
import { UserInfoBlock } from './UserInfoBlock';

const UserCardWrapper = styled.div`
  width: 520px;
  height: 200px;
  margin-top: 32px;
  margin-left: 32px;
  border: 1px solid ${ ({ theme }) => theme.colors.black };
  border-radius: 8px;
  padding: 16px;
  display: flex;
  background-color: ${ ({ theme }) => theme.colors.backgroundGray };
  cursor: pointer;

  &:hover {
    border-color: ${ ({ theme }) => theme.colors.gray };
  }
`;

interface IUserCardProps {
  id: number;
  name: string;
  email: string;
  city: string;
  street: string;
  phone: string;
  onUserCardClick: () => void;
  setSelectedUserId: (id: number) => void;
};

export const UserCard: React.FC<IUserCardProps> = props => {
  const { id, name, email, city, street, phone, onUserCardClick, setSelectedUserId } = props;
  return (
    <UserCardWrapper onClick={ () => {
      onUserCardClick();
      setSelectedUserId(id);
    } }>
      <UserAvatarBlock userName={ name }/>
      <UserInfoBlock
        userName={ name }
        email={ email }
        city={ city }
        street={ street }
        phone={ phone }
      />
    </UserCardWrapper>
  );
};
