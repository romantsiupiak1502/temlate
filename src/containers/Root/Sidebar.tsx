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

const SortButtonContainer = styled.div`
  margin-top: 32px;
`;

interface ISidebarProps {
  onNameChange: () => void;
  onEmailChange: () => void;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
  const { onNameChange, onEmailChange } = props;

  return (
    <Wrapper>
      <IconTextButton
        text='Add user'
        icon={ <PlusIcon size='25px'/> }
        onClick={ () => {alert('hi')} }
      />
      <InputStyled placeholder='Search by name' onChange={ onNameChange }/>
      <InputStyled placeholder='Search by email' onChange={ onEmailChange }/>
      <SortButtonContainer>
        <Dropdown
          items={ getDropdownItems(() => {}, () => {}) }
          Component={ <IconTextButton
            text='Sort'
            icon={ <DropdownArrowIcon size='15px'/> }
          /> }
        />
      </SortButtonContainer>
    </Wrapper>
  );
};
