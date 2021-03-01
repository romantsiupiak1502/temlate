import React from 'react';

import { UserAvatarConst } from '../consts';
import { styled } from '../styles';

import { UserAvatar } from './UserAvatar';
import { H1, H4 } from './Text';

const UserCardContainer = styled.div`
  width: 550px;
  height: 210px;
  border: 1px solid;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  background-color: ${ ({ theme }) => theme.colors.backgroundGray };
  cursor: pointer;
  &:hover {
    background-color: ${ ({ theme }) => theme.colors.white };
  }
`;

const AvatarContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserInformContainer = styled.div`
  width: 60%;
  height: 100%;
`;

const UserNameContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${ ({ theme }) => theme.colors.primary };
  border-bottom: 1px solid;
`;

const TextStyled = styled(H4)`
  color: ${ ({ theme }) => theme.colors.gray };
`;

const UserInfo = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
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
        <UserAvatar text='RT' size={ UserAvatarConst.BIG_AVATAR } onClick={ () => {
        } }/>
      </AvatarContainer>
      <UserInformContainer>
        <UserNameContainer>
          <H1>{ userName }</H1>
          <TextStyled>{ city }</TextStyled>
        </UserNameContainer>
        <UserInfo>
          <ul>
            <li>
              <TextStyled>email: { email }</TextStyled>
            </li>
            <li>
              <TextStyled>street: { street }</TextStyled>
            </li>
            <li>
              <TextStyled>phone: { phone }</TextStyled>
            </li>
          </ul>
        </UserInfo>
      </UserInformContainer>
    </UserCardContainer>
  );
};
