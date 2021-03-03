import React from 'react';

import { UserAvatarConst } from '../../../consts';
import { styled } from '../../../styles';
import { stringUtil } from '../../../utils';
import { UserAvatar } from '../../../components';

const AvatarContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IUserAvatarBlockProps {
  userName: string;
}

export const UserAvatarBlock: React.FC<IUserAvatarBlockProps> = props => {
  const { userName } = props;

  return (
    <AvatarContainer>
      <UserAvatar
        text={ stringUtil.UserNameInitialsUtil(userName) }
        size={ UserAvatarConst.BIG_AVATAR }
        onClick={ () => {} }
      />
    </AvatarContainer>
  );
};