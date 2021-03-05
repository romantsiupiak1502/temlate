import React from 'react';
import { Link } from 'react-router-dom';

import {
  H1,
  UserAvatar,
  Dropdown,
  LogoutIcon,
  LanguageIcon,
  IDropdownItem,
  IconTextButton,
  DropdownArrowIcon
} from '../../components';
import { styled } from '../../styles';
import { UserAvatarConst } from '../../consts';
import { stringUtil } from '../../utils';

export type IGetDropdownItem = (onLogoutClick: () => void, onChangeLanguage: () => void) => IDropdownItem[];

const getDropdownItems: IGetDropdownItem = (onLogoutClick, onChangeLanguage) => {
  return [
    { text: 'Logout', icon: <LogoutIcon size='25px'/>, onClick: onLogoutClick },
    { text: 'Language', icon: <LanguageIcon size='25px'/>, onClick: onChangeLanguage }
  ];
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${ ({ theme }) => theme.colors.backgroundGray };
  border-bottom: 2px solid ${ ({ theme }) => theme.colors.gray };
  padding: 8px;
`;

const Title = styled(Link)`
  color: ${ ({ theme }) => theme.colors.primary };
  text-decoration: none;
`;

const LoggedUser = styled.div`
  display: flex;
  align-items: center;
`;

interface IHeaderProps {
  onLogoutClick: () => void;
  onChangeLanguage: () => void;
  userName: string;
}

export const Header: React.FC<IHeaderProps> = props => {
  const { onLogoutClick, onChangeLanguage, userName } = props;

  return (
    <Wrapper>
      <Title to='/'>
        <H1>Swipex</H1>
      </Title>
      <LoggedUser>
        <UserAvatar
          text={ stringUtil.UserNameInitialsUtil(userName) }
          size={ UserAvatarConst.SMALL_AVATAR }
          onClick={ (() => {}) }
        />
        <Dropdown
          items={ getDropdownItems(onLogoutClick, onChangeLanguage) }
          Component={ <IconTextButton
            text={ userName }
            icon={ <DropdownArrowIcon size='20px'/> }
            onClick={ () => {} }
          /> }
        />
      </LoggedUser>
    </Wrapper>
  );
};