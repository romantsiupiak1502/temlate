import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
import { Button, InputField, PasswordInputField } from "../../components";
import { formErrorUtil } from '../../utils';

const PasswordInputStyled = styled(PasswordInputField)`
  margin-top: 16px;
  width: 388px;
`;

export const InputFieldStyled = styled(InputField)`
  width: 388px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 32px;
`;

export const FormStyled = styled(Form)`
  width: 420px;
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
            component={ InputFieldStyled }/>
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
