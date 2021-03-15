import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
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
`;

const InputStyled = styled(Input)`
  margin-top: 24px;
`;

const SortButton = styled.div`
  margin-top: 32px;
`;

interface ISidebarProps {
  onSearchByNameChange: (text: string) => void;
  onSearchByEmailChange: (text: string) => void;
  onSortByNameClick: () => void;
  onSortByEmailClick: () => void;
  onAddUserClick: () => void;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
  const { onSearchByNameChange, onSearchByEmailChange, onAddUserClick, onSortByNameClick, onSortByEmailClick } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      <IconTextButton
        text={t("ADD_USER")}
        icon={ <PlusIcon size='25px'/> }
        onClick={ onAddUserClick }
      />
      <InputStyled
        placeholder={t("SEARCH_BY_NAME")}
        onChange={ (event: any) => onSearchByNameChange(event.target.value) }/>
      <InputStyled
        placeholder={t("SEARCH_BY_EMAIL")}
        onChange={ (event: any) => onSearchByEmailChange(event.target.value) }/>
      <SortButton>
        <Dropdown
          items={ getDropdownItems( onSortByNameClick, onSortByEmailClick, t) }
          Component={ <IconTextButton
            text={t("SORT")}
            icon={ <DownArrowIcon size='15px'/> }
          /> }
        />
      </SortButton>
    </Wrapper>
  );
};
