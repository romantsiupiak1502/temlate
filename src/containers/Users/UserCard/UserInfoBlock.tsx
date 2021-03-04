import React from 'react';

import { styled } from '../../../styles';
import { H4, H1 } from '../../../components';

const UserInform = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

interface IUserInfoBlockProps {
  userName: string;
  email: string;
  city: string;
  street: string;
  phone: string;
};

export const UserInfoBlock: React.FC<IUserInfoBlockProps> = props => {
  const { userName, email, city, street, phone } = props;

  return (
    <UserInform>
      <UserNameContainer>
        <H1> { userName }</H1>
        <TextStyled>{ city }</TextStyled>
      </UserNameContainer>
      <UserInfo>
        <TextStyled>email: { email }</TextStyled>
        <TextStyled>street: { street }</TextStyled>
        <TextStyled>phone: { phone }</TextStyled>
      </UserInfo>
    </UserInform>
  );
};
