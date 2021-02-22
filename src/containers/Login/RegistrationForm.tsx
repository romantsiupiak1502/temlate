import React from 'react';
import { Field, Formik } from 'formik';
import { TextField } from '@material-ui/core';

import { InputField } from '../../components';

import { FormStyled, PasswordInputStyled, SubmitButton } from './LoginForm';

export const RegistrationForm = () => {
  return (
    <Formik
      initialValues={ {
        birthday: '',
        fullName: '',
        email: '',
        password: '',
        repeatPassword: '',
      } }
      onSubmit={ () => {
      } }
    >
      <FormStyled>
        <TextField id='date' label='Birthday' type='date' defaultValue="2017-05-24"/>
        <Field name="fullName" placeholder="Enter your full name" component={ InputField }/>
        <Field name="email" placeholder="Enter your email" component={ InputField }/>
        <Field name="password" placeholder="Enter your password" component={ PasswordInputStyled }/>
        <Field name="repeatPassword" placeholder="Repeat your password" component={ PasswordInputStyled }/>
        <SubmitButton type="submit" text='Sign up' onClick={ () => {} } />
      </FormStyled>
    </Formik>
  );
}
