import React from 'react';
import { useTranslation } from 'react-i18next';

import { device, styled } from '../../styles';
import {
  IconTextButton,
  PlusIcon,
  DownArrowIcon,
  Dropdown,
  UserIcon,
  EmailIcon,
  Input,
} from '../../components';

import { IGetDropdownItems } from './Header';

const getDropdownItems: IGetDropdownItems = (onSortByName, onSortByEmail, t) => {
  return [
    { text: t("SORT_BY_NAME"), icon: <UserIcon size='25px'/>, onClick: onSortByName },
    { text: t("SORT_BY_EMAIL"), icon: <EmailIcon size='25px'/>, onClick: onSortByEmail },
  ];
}

interface IOpenSidebarProps {
  isOpen: boolean;
}

const Wrapper = styled.div<IOpenSidebarProps>`
  background-color: ${ ({ theme }) => theme.colors.backgroundGray };
  border-left: 2px solid ${ ({ theme }) => theme.colors.gray };
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  position: ${ ({ isOpen }) => isOpen && 'absolute' };

  @media ${ device.mobileXL } {
    top: 104px;
    right: 0px;
    display: ${ ({ isOpen }) => !isOpen && 'none' };
    }
  }
`;

const InputStyled = styled(Input)`
  margin-top: 24px;
`;

const SortButton = styled.div`
  margin-top: 32px;
`;

const BurgerMenu = styled.div`
  display: none;
  @media ${device.mobileXL} {
    display: block;
    transform-origin: 16px 11px;
    float: left;
    outline: 0;
    border: 0;
    padding: 12px;

    &.active {
      span:nth-of-type(1) {
        transform: rotate(45deg) translate(2px, 2px);
        width: 24px;
      }

      span:nth-of-type(2) {
        opacity: 0;
        pointer-events: none;
      }

      span:nth-of-type(3) {
        transform: rotate(-45deg) translate(4px, -4px);
        width: 24px;
      }
  }
`;

const Bar = styled.span`
  display: block;
  width: 24px;
  height: 1px;
  margin-bottom: 3px;
  background-color: ${({ theme }) => theme.colors.primary };
`;

interface ISidebarProps {
  onSearchByNameChange: () => void;
  onSearchByEmailChange: () => void;
  onAddUserClick: () => void;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
  const { onSearchByNameChange, onSearchByEmailChange, onAddUserClick } = props;
  const { t } = useTranslation();

  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const toggleOpenMenu = () => {
    setIsOpenMenu(prevState => !prevState);
  }

  return (
    <>
      <BurgerMenu onClick={ toggleOpenMenu } className={isOpenMenu ? 'active': ''}>
        <Bar />
        <Bar />
        <Bar />
      </BurgerMenu>
      <Wrapper isOpen={ isOpenMenu }>
        <IconTextButton
          text={ t("ADD_USER") }
          icon={ <PlusIcon size='25px'/> }
          onClick={ onAddUserClick }
        />
        <InputStyled placeholder={ t("SEARCH_BY_NAME") } onChange={ onSearchByNameChange }/>
        <InputStyled placeholder={ t("SEARCH_BY_EMAIL") } onChange={ onSearchByEmailChange }/>
        <SortButton>
          <Dropdown
            items={ getDropdownItems(() => {
              setIsOpenMenu(false)
            }, () => {
              setIsOpenMenu(false)
            }, t) }
            Component={ <IconTextButton
              text={ t("SORT") }
              icon={ <DownArrowIcon size='15px'/> }
            /> }
          />
        </SortButton>
      </Wrapper>
    </>
  );
};
