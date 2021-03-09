import React from 'react';

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

const getDropdownItems: IGetDropdownItems = (onSortByName, onSortByEmail) => {
  return [
    { text: 'Sort by name', icon: <UserIcon size='25px'/>, onClick: onSortByName },
    { text: 'Sort by email', icon: <EmailIcon size='25px'/>, onClick: onSortByEmail },
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
  onSearchByNameChange: () => void;
  onSearchByEmailChange: () => void;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
  const { onSearchByNameChange, onSearchByEmailChange } = props;

  return (
    <Wrapper>
      <IconTextButton
        text='Add user'
        icon={ <PlusIcon size='25px'/> }
        onClick={ () => { } }
      />
      <InputStyled placeholder='Search by name' onChange={ onSearchByNameChange }/>
      <InputStyled placeholder='Search by email' onChange={ onSearchByEmailChange }/>
      <SortButton>
        <Dropdown
          items={ getDropdownItems(() => {}, () => {}) }
          Component={ <IconTextButton
            text='Sort'
            icon={ <DownArrowIcon size='15px'/> }
          /> }
        />
      </SortButton>
    </Wrapper>
  );
};
