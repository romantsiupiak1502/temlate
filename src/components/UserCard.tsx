import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '../styles';

import { H3 } from './Text';
import { IconButton } from './IconButton';
import { SendMessageIcon } from './icons';

const UserCardContainer = styled.div`
  width: 230px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 8px;
`;

const AvatarContainer = styled.div`
  width: 100%;
  height: 70%;
  border-top-left-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  background-color: ${ ({ theme }) => theme.colors.primary };
  opacity: 0.7;
`;

const SendButtonContainer = styled.div`
  width: 100%;
  height: 20%;
  color: ${ ({ theme }) => theme.colors.white };
`;

interface IUserCardProps {
  id: number;
  avatar: React.ReactElement;
  userName: string;
  email: string;
};

export const UserCard: React.FC<IUserCardProps> = props => {
  const { id, avatar, userName, email } = props;
  return (
    <UserCardContainer>
      <AvatarContainer>
        <SendButtonContainer>
          <Link to=''>
            <IconButton text='' icon={ <SendMessageIcon size='30px'/> } onClick={ () => {
            } }/>
          </Link>
        </SendButtonContainer>
        { avatar }
      </AvatarContainer>
      <H3>{ userName }</H3>
      <H3>{ email }</H3>
    </UserCardContainer>
  );
};
