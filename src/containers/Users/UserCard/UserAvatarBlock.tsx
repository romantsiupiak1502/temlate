import React from 'react';

import { UserAvatarConst } from '../../../consts';
import { styled } from '../../../styles';
import { stringUtil } from '../../../utils';
import { UserAvatar } from '../../../components';

const AvatarContainer = styled.div`
  display: flex;
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