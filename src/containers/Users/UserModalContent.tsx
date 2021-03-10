import React from 'react';

import { styled } from '../../styles';
import { UserAvatar } from '../../components';
import { UserAvatarConst } from '../../consts';
import { stringUtil } from '../../utils';

import { UserInfoRow } from './UserInfoRow';
import { IUsersItem } from './index';

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

  return (
    <Wrapper>
      { selectedUser
        ? <>
          <UserAvatarContainer>
            <UserAvatar
              text={ stringUtil.UserNameInitialsUtil(selectedUser.name) }
              size={ UserAvatarConst.BIG_AVATAR }/>
          </UserAvatarContainer>
          <UserInfoRow title='email' value={ selectedUser.email }/>
          <UserInfoRow title='city' value={ selectedUser.address.city }/>
          <UserInfoRow title='street' value={ selectedUser.address.street }/>
          <UserInfoRow title='suit' value={ selectedUser.address.suite }/>
          <UserInfoRow title='zipcode' value={ selectedUser.address.zipcode }/>
          <UserInfoRow title='phone' value={ selectedUser.phone }/>
          <UserInfoRow title='website' value={ selectedUser.website }/>
        </>
        : null }
    </Wrapper>
  );
};
