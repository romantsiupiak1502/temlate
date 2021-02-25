import React from 'react';
import { Field, Form, Formik } from "formik";

import { styled } from '../../styles';
import { Button, InputField, PasswordInputField } from "../../components";
import { formErrorUtil } from '../../utils';

export const PasswordInputStyled = styled(PasswordInputField)`
  margin-top: 24px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 32px;
`;

export const FormStyled = styled(Form)`
  width: 430px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = () => {
  return (
    <Formik
      initialValues = {{
        email: '',
        password: '',
      }}
      onSubmit={ () => {} }
    >
        <FormStyled>
          <Field
            name="email"
            placeholder="Enter your email"
            validate={formErrorUtil.combineValidation([formErrorUtil.required, formErrorUtil.email])}
            component={ InputField }/>
          <Field
            name="password"
            placeholder="Enter your password"
            validate={ formErrorUtil.combineValidation([formErrorUtil.required, formErrorUtil.password])}
            component={ PasswordInputStyled }/>
          <SubmitButton type="submit" text='Submit' onClick={ () => {} } />
        </FormStyled>
    </Formik>
  );
};
