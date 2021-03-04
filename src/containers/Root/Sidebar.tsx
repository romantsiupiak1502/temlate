import React from 'react';
import { Field, Form, Formik } from 'formik';

import { styled } from '../../styles';
import {
  IconTextButton,
  IconButton,
  AddIcon,
  InputField,
  DropdownArrowIcon,
  Dropdown,
  UserIcon,
  EmailIcon,
  TextButton
} from '../../components';

import { IGetDropdownItem } from './Header';

const getDropdownItems: IGetDropdownItem = (onSortByName, onSortByEmail) => {
  return [
    { text: 'Sort by name', icon: <UserIcon size='25px'/>, onClick: onSortByName },
    { text: 'Sort by email', icon: <EmailIcon size='25px'/>, onClick: onSortByName },
  ];
}

const SideBarWrapper = styled.div`
  color: ${ ({ theme }) => theme.colors.primary };
  background-color: ${ ({ theme }) => theme.colors.backgroundGray };
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  padding-right: 32px;
`;

const FormStyled = styled(Form)`
  padding-top: 16px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputFieldStyled = styled(InputField)`
  width: 96%;
`;

const SortButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 32px;
`;

export const Sidebar: React.FC = () => {
  return (
    <SideBarWrapper>
      <IconTextButton text='Add user' icon={ <AddIcon size='25px'/> } onClick={ () => {
      } }/>
      <Formik
        initialValues={ {
          searchByName: '',
          searchByCity: '',
        } }
        onSubmit={ () => {
        } }
      >
        <FormStyled>
          <Field
            name='searchByName'
            placeholder='Search by name'
            component={ InputFieldStyled }/>
          <Field
            name='searchByCity'
            placeholder='Search by city'
            component={ InputFieldStyled }/>
        </FormStyled>
      </Formik>
      <SortButtonContainer>
        <TextButton text='Sort' onClick={ () => {
        } }/>
        <Dropdown
          items={ getDropdownItems(() => { }, () => {}) }
          Component={<IconButton icon={ <DropdownArrowIcon size='15px'/> } onClick={ () => {} }/>}
        />
      </SortButtonContainer>
    </SideBarWrapper>
  );
};
