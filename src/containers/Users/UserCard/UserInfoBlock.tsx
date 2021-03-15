import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../../styles';
import { H4, H1 } from '../../../components';

const UserInform = styled.div`
  display: flex;
  flex-direction: column;
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

const UserInfoText = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface IUserInfoBlockProps {
  userName: string;
  email: string;
  city: string;
  street: string;
  phone: string;
}

export const UserInfoBlock: React.FC<IUserInfoBlockProps> = props => {
  const { userName, email, city, street, phone } = props;
  const { t } = useTranslation();

  return (
    <UserInform>
      <UserNameContainer>
        <H1> { userName }</H1>
        <TextStyled>{ city }</TextStyled>
      </UserNameContainer>
      <UserInfo>
        <UserInfoText>
          <TextStyled>{ t("EMAIL") }:</TextStyled>
          <TextStyled>{ email }</TextStyled>
        </UserInfoText>
        <UserInfoText>
          <TextStyled>{ t("STREET") }:</TextStyled>
          <TextStyled>{ street }</TextStyled>
        </UserInfoText>
        <UserInfoText>
          <TextStyled>{ t("PHONE") }:</TextStyled>
          <TextStyled>{ phone }</TextStyled>
        </UserInfoText>
      </UserInfo>
    </UserInform>
  );
};
