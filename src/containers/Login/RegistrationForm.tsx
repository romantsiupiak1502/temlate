import React from 'react';
import { Field, Formik } from 'formik';

import { DatePickerField, InputField, PasswordInput } from '../../components';
import { styled } from '../../styles';

import { FormStyled, SubmitButton } from './LoginForm';

const FieldsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputFieldStyled = styled(InputField)`
  width: 88%;
`;

const EmailInput = styled(InputField)`
  width: 94%;
`;

const PasswordInputStyled = styled(PasswordInput)`
  margin-top: 24px;
  width: 88%;
`;

export const RegistrationForm = () => {
  const now = new Date();
  const date = now.getFullYear() + '-' + now.getMonth() + 1 + '-' + now.getDate();
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
        <Field name="birthday" label="Birthday" defaultValue={date} component={ DatePickerField } />
        <FieldsRow>
          <Field name="name" placeholder="Enter your name" component={ InputFieldStyled }/>
          <Field name="surname" placeholder="Enter your surname" component={ InputFieldStyled }/>
        </FieldsRow>
        <Field name="email" placeholder="Enter your email" component={ EmailInput }/>
        <FieldsRow>
          <Field name="password" placeholder="Enter your password" component={ PasswordInputStyled }/>
          <Field name="repeatPassword" placeholder="Repeat your password" component={ PasswordInputStyled }/>
        </FieldsRow>
        <SubmitButton type="submit" text='Sign up' onClick={ () => {} } />
      </FormStyled>
    </Formik>
  );
}
