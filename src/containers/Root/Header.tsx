import React from 'react';
import { Link } from 'react-router-dom';

import { H1, UserAvatar, Dropdown, LogoutIcon, LanguageIcon} from '../../components';
import { styled } from '../../styles';
import { UserAvatarConst } from '../../consts';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(Link)`
  padding-left: 20px;
  color: ${ ({ theme }) => theme.colors.primary };
  text-decoration: none;
`;

const LoggedUser = styled.div`
  display: flex;
  align-items: center;
`;

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title to='/'>
        <H1>Swipex</H1>
      </Title>
      <LoggedUser>
        <UserAvatar text='RT' size={UserAvatarConst.SMALL_AVATAR} onClick={( () => {} )} />
        <Dropdown
        items={[
        { text: 'Logout', icon: <LogoutIcon size='25px'/>,  onClick: () => {}},
        { text: 'Language', icon: <LanguageIcon size='25px'/>, onClick: () => {}},
      ]} />
      </LoggedUser>
    </HeaderWrapper>
  );
};