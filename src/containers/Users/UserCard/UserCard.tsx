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
  align-items: center;
  background-color: ${ ({ theme }) => theme.colors.backgroundGray };
  cursor: pointer;

  &:hover {
    border-color: ${ ({ theme }) => theme.colors.gray };
  }
`;

const UserInfoBlockContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface IUserCardProps {
  name: string;
  email: string;
  city: string;
  street: string;
  phone: string;
  onUserCardClick: () => void;
};

export const UserCard: React.FC<IUserCardProps> = props => {
  const { name, email, city, street, phone, onUserCardClick } = props;

  return (
    <UserCardWrapper onClick={ onUserCardClick }>
      <UserAvatarBlock userName={ name }/>
      <UserInfoBlockContainer>
        <UserInfoBlock
          userName={ name }
          email={ email }
          city={ city }
          street={ street }
          phone={ phone }
        />
      </UserInfoBlockContainer>
    </UserCardWrapper>
  );
};
