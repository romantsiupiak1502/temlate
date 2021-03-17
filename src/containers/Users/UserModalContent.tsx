import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
import { UserAvatar } from '../../components';
import { UserAvatarConst } from '../../consts';
import { stringUtil } from '../../utils';
import { IUsersItem } from '../../store/users';

import { UserInfoRow } from './UserInfoRow';

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const UserAvatarContainer = styled.div`
  border-bottom: 2px solid ${ ({ theme }) => theme.colors.black };
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IUserModalContentProps {
  selectedUser: IUsersItem | null,
}

export const UserModalContent: React.FC<IUserModalContentProps> = props => {
  const { selectedUser } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      { selectedUser
        ? <>
          <UserAvatarContainer>
            <UserAvatar
              text={ stringUtil.UserNameInitialsUtil(selectedUser.name) }
              size={ UserAvatarConst.BIG_AVATAR }/>
          </UserAvatarContainer>
          <UserInfoRow title={t("EMAIL")} value={ selectedUser.email }/>
          <UserInfoRow title={t("CITY")} value={ selectedUser.address.city }/>
          <UserInfoRow title={t("STREET")} value={ selectedUser.address.street }/>
          <UserInfoRow title={t("SUIT")} value={ selectedUser.address.suite }/>
          <UserInfoRow title={t("ZIPCODE")} value={ selectedUser.address.zipcode }/>
          <UserInfoRow title={t("PHONE")} value={ selectedUser.phone }/>
          <UserInfoRow title={t("WEBSITE")} value={ selectedUser.website }/>
        </>
        : null }
    </Wrapper>
  );
};
