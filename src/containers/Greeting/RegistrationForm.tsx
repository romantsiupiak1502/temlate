import React from 'react';
import { Field, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { InputField, PasswordInputField } from '../../components';
import { styled } from '../../styles';
import { LoginRegistrationConst } from '../../consts';
import { formErrorUtil } from '../../utils';

import { FormStyled, SubmitButton, InputFieldStyled, SnackbarError } from './LoginForm';

const FieldsRow = styled.div`
  width: 100%;
  display: flex;
`;

interface IRegistrationFormProps {
  onSignUpClick:
    (name: string, surname: string, email: string, password: string, toggleIsShowError: () => void, isCheckout: () => void) => void;
  checkoutToLogin: (value: string) => void;
}

export const RegistrationForm: React.FC<IRegistrationFormProps> = props => {
  const { onSignUpClick, checkoutToLogin } = props;
  const { t } = useTranslation();
  const [isShowError, setIsShowError] = React.useState<boolean>(false);

  const toggleIsShowError = () => {
    setIsShowError(!isShowError);
  }

  const isCheckout = () => {
    checkoutToLogin(LoginRegistrationConst.LOGIN);
  }

  return (
    <>
      <Formik
        initialValues={ {
          name: '',
          surname: '',
          email: '',
          password: '',
          repeatPassword: '',
        } }
        onSubmit={ (values) =>
          onSignUpClick(values.name, values.surname, values.email, values.password, toggleIsShowError, isCheckout) }
      >
        { ({ values, handleSubmit }) => (
          <FormStyled>
            <FieldsRow>
              <Field
                name="name"
                placeholder={ t("ENTER_YOUR_NAME") }
                validate={ formErrorUtil.required }
                component={ InputField }
              />
              <Field
                name="surname"
                placeholder={ t("ENTER_YOUR_SURNAME") }
                validate={ formErrorUtil.required }
                component={ InputField }
              />
            </FieldsRow>
            <Field
              name="email"
              placeholder={ t("ENTER_YOUR_EMAIL") }
              validate={ formErrorUtil.combineValidation([formErrorUtil.required, formErrorUtil.email]) }
              component={ InputFieldStyled }
            />
            <FieldsRow>
              <Field
                name="password"
                placeholder={ t("ENTER_YOUR_PASSWORD") }
                validate={ formErrorUtil.combineValidation([formErrorUtil.required, formErrorUtil.password]) }
                component={ PasswordInputField }
              />
              <Field
                name="repeatPassword"
                placeholder={ t("REPEAT_PASSWORD") }
                validate={ (value: string) => formErrorUtil.passwordRequirements(values.password, value) }
                component={ PasswordInputField }
              />
            </FieldsRow>
            <SubmitButton
              text={ t("SIGN_UP") }
              onClick={ handleSubmit }
              isDisabled={isShowError}
            />
          </FormStyled>
        ) }
      </Formik>
      <SnackbarError
        open={ isShowError }
        onClose={ toggleIsShowError }
        autoHideDuration={ 2000 }
        message={ t("EMAIL_ALREADY_EXIST") }
      />
    </>
  );
}
