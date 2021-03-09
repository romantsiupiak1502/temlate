import React from 'react';

import { styled } from '../../styles';
import { IconTextButton, UserAvatar, CloseIcon } from '../../components';
import { UserAvatarConst } from '../../consts';
import { stringUtil } from '../../utils';

import { UserInfoRow } from './UserInfoRow';

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  color: ${ ({ theme }) => theme.colors.gray };
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
  selectedUser: any,
  onCloseClick: () => void,
}

export const UserModalContent: React.FC<IUserModalContentProps> = props => {
  const { selectedUser, onCloseClick } = props;

  return (
    <Wrapper>
      <CloseButton>
        <IconTextButton
          text='Close'
          icon={ <CloseIcon size='25px'/> }
          onClick={ onCloseClick }
        />
      </CloseButton>
      <UserAvatarContainer>
        <UserAvatar text={ stringUtil.UserNameInitialsUtil(selectedUser.name) } size={ UserAvatarConst.BIG_AVATAR }/>
      </UserAvatarContainer>
      <UserInfoRow field='email' value={ selectedUser.email }/>
      <UserInfoRow field='city' value={ selectedUser.address.city }/>
      <UserInfoRow field='street' value={ selectedUser.address.street }/>
      <UserInfoRow field='suit' value={ selectedUser.address.suite }/>
      <UserInfoRow field='zipcode' value={ selectedUser.address.zipcode }/>
      <UserInfoRow field='phone' value={ selectedUser.phone }/>
      <UserInfoRow field='website' value={ selectedUser.website }/>
    </Wrapper>
  );
};
