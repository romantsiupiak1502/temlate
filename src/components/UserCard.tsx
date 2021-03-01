import React from 'react';

import { UserAvatarConst } from '../consts';
import { styled } from '../styles';
import { UserNameInitialsUtil } from '../utils';

import { UserAvatar } from './UserAvatar';
import { H1, H4 } from './Text';

const UserCardContainer = styled.div`
  width: 450px;
  height: 210px;
  border: 1px solid ${ ({ theme }) => theme.colors.black };
  border-radius: 8px;
  padding: 16px;
  display: flex;
  background-color: ${ ({ theme }) => theme.colors.backgroundGray };
  cursor: pointer;

  &:hover {
    background-color: ${ ({ theme }) => theme.colors.white };
  }
`;

const UserInform = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AvatarContainer = styled.div`
  padding: 32px;
  display: flex;
`;

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${ ({ theme }) => theme.colors.primary };
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.black };
`;

const TextStyled = styled(H4)`
  color: ${ ({ theme }) => theme.colors.gray };
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface IUserCardProps {
  id: number;
  avatar: React.ReactElement;
  userName: string;
  email: string;
  city: string;
  street: string;
  phone: string;
  webSite: string;
};

export const UserCard: React.FC<IUserCardProps> = props => {

  const { id, avatar, userName, email, city, phone, street } = props;

  return (
   <UserCardContainer>
          <AvatarContainer>
        <UserAvatar text={UserNameInitialsUtil(userName)} size={ UserAvatarConst.BIG_AVATAR } onClick={ () => {} }/>
      </AvatarContainer>
      <UserInform>
        <UserNameContainer>
          <H1>{ userName }</H1>
          <TextStyled>{ city }</TextStyled>
        </UserNameContainer>
        <UserInfo>
          <TextStyled>email: { email }</TextStyled>
          <TextStyled>street: { street }</TextStyled>
          <TextStyled>phone: { phone }</TextStyled>
        </UserInfo>
      </UserInform>
    </UserCardContainer>
  );
};
