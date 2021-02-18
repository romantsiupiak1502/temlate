import React from 'react';
import { Field, Form, Formik } from "formik";

import { styled } from '../../styles';
import { Button, InputField, PasswordInput } from "../../components";

const PasswordInputStyled = styled(PasswordInput)`
  margin-top: 24px;
`;

const SubmitButton = styled(Button)`
  margin-top: 32px;
`;

const FormStyled = styled(Form)`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = () => {
  return (
    <Formik
      initialValues={ {
        email: '',
        password: '',
      } }
      onSubmit={ () => {
      } }
    >
      <FormStyled>
        <Field name="email" placeholder="Enter your email" component={ InputField }/>
        <Field name="password" placeholder="Enter your password" component={ PasswordInputStyled }/>
        <SubmitButton type="submit" text='Submit' onClick={ () => {
        } }>Submit</SubmitButton>
      </FormStyled>
    </Formik>
  );
}
