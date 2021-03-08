import React from 'react';

import { styled } from '../../styles';
import { UserAvatar, H4 } from '../../components';
import { UserAvatarConst } from '../../consts';
import { stringUtil } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${ ({ theme }) => theme.colors.gray };
`;

const UserAvatarContainer = styled.div`
  border-bottom: 2px solid;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IUserModalContent {
  selectedUser: any,
  onCloseClick: () => void,
}

export const UserModalContent: React.FC<IUserModalContent> = props => {
  const { selectedUser, onCloseClick } = props;
  return (
    <Wrapper onClick={onCloseClick}>
      <UserAvatarContainer>
        <UserAvatar text={ stringUtil.UserNameInitialsUtil(selectedUser.name) } size={ UserAvatarConst.BIG_AVATAR }/>
      </UserAvatarContainer>
      <H4>email: { selectedUser.email }</H4>
      <H4>city: { selectedUser.address.city }</H4>
      <H4>street: { selectedUser.address.street }</H4>
      <H4>suit: { selectedUser.address.suite }</H4>
      <H4>zipcode: { selectedUser.address.zipcode }</H4>
      <H4>phone: { selectedUser.phone }</H4>
      <H4>website: { selectedUser.website }</H4>
    </Wrapper>
  );
}