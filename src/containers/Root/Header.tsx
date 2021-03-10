import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  H1,
  UserAvatar,
  Dropdown,
  LogoutIcon,
  LanguageIcon,
  IDropdownItem,
  IconTextButton,
  DownArrowIcon
} from '../../components';
import { styled } from '../../styles';
import { UserAvatarConst } from '../../consts';
import { stringUtil } from '../../utils';

export type IGetDropdownItems = (onLogoutClick: () => void, onChangeLanguage: () => void, t: any) => IDropdownItem[];

const getDropdownItems: IGetDropdownItems = (onLogoutClick, onChangeLanguage, t ) => {
  return [
    { text: t("LOGOUT"), icon: <LogoutIcon size='25px'/>, onClick: onLogoutClick },
    { text: t("LANGUAGE"), icon: <LanguageIcon size='25px'/>, onClick: onChangeLanguage }
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

const UserInfoBlock = styled.div`
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
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title to='/'>
        <H1>Swipex</H1>
      </Title>
      <UserInfoBlock>
        <UserAvatar
          text={ stringUtil.UserNameInitialsUtil(userName) }
          size={ UserAvatarConst.SMALL_AVATAR }
        />
        <Dropdown
          items={ getDropdownItems(onLogoutClick, onChangeLanguage, t) }
          Component={ <IconTextButton
            text={ userName }
            icon={ <DownArrowIcon size='20px'/> }
          /> }
        />
      </UserInfoBlock>
    </Wrapper>
  );
};
