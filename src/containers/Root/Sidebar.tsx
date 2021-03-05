import React from 'react';

import { styled } from '../../styles';
import {
  IconTextButton,
  PlusIcon,
  DropdownArrowIcon,
  Dropdown,
  UserIcon,
  EmailIcon,
  Input,
} from '../../components';

import { IGetDropdownItem } from './Header';

const getDropdownItems: IGetDropdownItem = (onSortByName, onSortByEmail) => {
  return [
    { text: 'Sort by name', icon: <UserIcon size='25px'/>, onClick: onSortByName },
    { text: 'Sort by email', icon: <EmailIcon size='25px'/>, onClick: onSortByEmail },
  ];
}

const Wrapper = styled.div`
  color: ${ ({ theme }) => theme.colors.primary };
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

const SortButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <IconTextButton
        text='Add user'
        icon={ <PlusIcon size='25px'/> }
        onClick={ () => {} }
      />
      <InputStyled placeholder='Search by name' onChange={ () => {} }/>
      <InputStyled placeholder='Search by email' onChange={ () => {} }/>
      <SortButtonContainer>
        <Dropdown
          items={ getDropdownItems(() => {}, () => {}) }
          Component={ <IconTextButton
            text='Sort'
            icon={ <DropdownArrowIcon size='15px'/> }
            onClick={ () => {} }
          /> }
        />
      </SortButtonContainer>
    </Wrapper>
  );
};
