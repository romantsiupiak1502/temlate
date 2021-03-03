import React from 'react';
import { Field, Form, Formik } from 'formik';

import { styled } from '../../styles';
import {
  IconButton,
  AddIcon,
  InputField,
  SearchIcon,
  Dropdown,
  UserIcon,
  PhoneIcon,
  TextButton
} from '../../components';

import { IGetDropdownItem } from './Header';

const getDropdownItems: IGetDropdownItem = (onLogoutClick, onChangeLanguage) => {
  return [
    { text: 'Sort by name', icon: <UserIcon size='25px'/>, onClick: onLogoutClick },
    { text: 'Sort by phone', icon: <PhoneIcon size='25px'/>, onClick: onChangeLanguage }
  ];
}

const SideBarWrapper = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${ ({ theme }) => theme.colors.backgroundGray };
  color: ${ ({ theme }) => theme.colors.primary };
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
`;

const FormStyled = styled(Form)`
  padding-top: 16px;
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
  padding-top: 32px;
`;

export const Sidebar: React.FC = () => {
  return (
    <SideBarWrapper>
      <IconButton text='Add button' icon={ <AddIcon size='25px'/> } onClick={ () => {
      } }/>
      <Formik
        initialValues={ {
          searchByName: '',
          searchByCity: '',
        } }
        onSubmit={ () => {
        } }
      >
        { ({ handleSubmit }) => (
          <FormStyled>
            <Field
              name='searchByName'
              placeholder='Search by name'
              component={ InputFieldStyled }/>
            <Field
              name='searchByCity'
              placeholder='Search by city'
              component={ InputFieldStyled }/>
            <IconButton
              text='Search'
              icon={ <SearchIcon size='25px'/> }
              onClick={ (e) => handleSubmit }/>
          </FormStyled>
        ) }
      </Formik>
      <SortButtonContainer>
        <TextButton text='Sort' onClick={ () => {} }/>
        <Dropdown items={ getDropdownItems(() => {
        }, () => {
        }) }/>
      </SortButtonContainer>
    </SideBarWrapper>
  );
};
