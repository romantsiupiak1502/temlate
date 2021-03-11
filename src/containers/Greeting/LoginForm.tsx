import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={ () => {} }
    >
        <FormStyled>
          <Field
            name="email"
            placeholder={t("ENTER_YOUR_EMAIL")}
            validate={formErrorUtil.combineValidation([formErrorUtil.required, formErrorUtil.email])}
            component={ InputField }/>
          <Field
            name="password"
            placeholder={t("ENTER_YOUR_PASSWORD")}
            validate={ formErrorUtil.combineValidation([formErrorUtil.required, formErrorUtil.password])}
            component={ PasswordInputStyled }/>
          <SubmitButton
            type="submit"
            text={t("SIGN_IN")}
            onClick={ () => {} }
          />
        </FormStyled>
    </Formik>
  );
};
