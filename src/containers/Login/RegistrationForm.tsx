import React from 'react';
import { Field, Formik } from 'formik';

import { InputField } from '../../components';

import { FormStyled, PasswordInputStyled, SubmitButton } from './LoginForm';

export const RegistrationForm = () => {
  return (
    <Formik
      initialValues={ {
        email: '',
        password: '',
        repeatPassword: '',
      } }
      onSubmit={ () => {
      } }
    >
      <FormStyled>
        <Field name="email" placeholder="Enter your email" component={ InputField }/>
        <Field name="password" placeholder="Enter your password" component={ PasswordInputStyled }/>
        <Field name="password" placeholder="Enter your password" component={ PasswordInputStyled }/>
        <SubmitButton type="submit" text='Sing up' onClick={ () => {
        } } />
      </FormStyled>
    </Formik>
  );
}
