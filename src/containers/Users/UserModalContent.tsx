import React from 'react';

import { styled } from '../../styles';
import { IconTextButton, UserAvatar, RoodIcon } from '../../components';
import { UserAvatarConst } from '../../consts';
import { stringUtil } from '../../utils';

import { UserInfoRow } from './UserInfoRow';
import { IUsersItem } from './Users';

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
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
  onCloseClick: () => void,
}

export const UserModalContent: React.FC<IUserModalContentProps> = props => {
  const { selectedUser, onCloseClick } = props;
  return (
    <Wrapper>
      <CloseButton>
        <IconTextButton
          text='Close'
          icon={ <RoodIcon size='25px'/> }
          onClick={ onCloseClick }
        />
      </CloseButton>
      { selectedUser
        ? <>
          <UserAvatarContainer>
            <UserAvatar text={ stringUtil.UserNameInitialsUtil(selectedUser.name) }
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
