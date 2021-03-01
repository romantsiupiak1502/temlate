import React from 'react';

import { UserAvatar, UserCard } from '../../components';
import { UserAvatarConst } from '../../consts';

export const AuthorizedRoot: React.FC = () => {
  return (
    <UserCard
      id={1}
      avatar={ <UserAvatar text={'RT'} size={UserAvatarConst.BIG_AVATAR} onClick={ () => {} } /> }
      userName={'Roman Tsiupiak'} email={'romantsiupika@gmail'} />
  );
};
