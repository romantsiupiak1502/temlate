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

const Wrapper = styled.div`
  background-color: ${ ({ theme }) => theme.colors.backgroundGray };
  border-left: 2px solid ${ ({ theme }) => theme.colors.gray };
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  @media ${device.mobileXL} {
    display: none;
  }
`;

const InputStyled = styled(Input)`
  margin-top: 24px;
`;

const SortButton = styled.div`
  margin-top: 32px;
`;

interface ISidebarProps {
  onSearchByNameChange: () => void;
  onSearchByEmailChange: () => void;
  onAddUserClick: () => void;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
  const { onSearchByNameChange, onSearchByEmailChange, onAddUserClick } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      <IconTextButton
        text={t("ADD_USER")}
        icon={ <PlusIcon size='25px'/> }
        onClick={ onAddUserClick }
      />
      <InputStyled placeholder={t("SEARCH_BY_NAME")} onChange={ onSearchByNameChange }/>
      <InputStyled placeholder={t("SEARCH_BY_EMAIL")} onChange={ onSearchByEmailChange }/>
      <SortButton>
        <Dropdown
          items={ getDropdownItems(() => {}, () => {}, t) }
          Component={ <IconTextButton
            text={t("SORT")}
            icon={ <DownArrowIcon size='15px'/> }
          /> }
        />
      </SortButton>
    </Wrapper>
  );
};
