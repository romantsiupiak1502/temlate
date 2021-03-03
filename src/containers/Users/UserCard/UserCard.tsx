import React from 'react';

import { styled } from '../../../styles';

import { UserAvatarBlock } from './UserAvatarBlock';
import { UserInfoBlock } from './UserInfoBlock';

const UserCardWrapper = styled.div`
  width: 480px;
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
    border: 1px solid ${ ({ theme }) => theme.colors.white };
  }
`;

interface IUserCardProps {
  id: number;
  name: string;
  email: string;
  city: string;
  street: string;
  phone: string;
};

export const UserCard: React.FC<IUserCardProps> = props => {
  const { id, name, email, city, street, phone } = props;
  return (
    <UserCardWrapper>
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
