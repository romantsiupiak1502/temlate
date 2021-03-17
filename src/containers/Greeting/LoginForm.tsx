import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Snackbar } from '@material-ui/core';

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

export const SnackbarError = styled(Snackbar)`
  .MuiSnackbarContent-root {
    background-color: ${ ({ theme }) => theme.colors.red };
  }
`;

interface ILoginFormProps {
  onLoginClick: (email: string, password: string, toggleIsShowError: () => void) => void;
}

export const LoginForm: React.FC<ILoginFormProps> = props => {
  const { onLoginClick } = props;
  const { t } = useTranslation();
  const [isShowError, setIsShowError] = React.useState<boolean>(false);

  const toggleIsShowError = () => {
    setIsShowError(!isShowError)
  }

  return (
    <>
      <Formik
        initialValues={ {
          email: '',
          password: '',
        } }
        onSubmit={ (values) => onLoginClick(values.email, values.password, toggleIsShowError) }
      >
        { ({ handleSubmit, values }) => (
          <FormStyled>
            <Field
              name="email"
              placeholder={ t("ENTER_YOUR_EMAIL") }
              validate={ formErrorUtil.combineValidation([formErrorUtil.required, formErrorUtil.email]) }
              component={ InputFieldStyled }/>
            <Field
              name="password"
              placeholder={ t("ENTER_YOUR_PASSWORD") }
              validate={ formErrorUtil.required }
              component={ PasswordInputStyled }/>
            <SubmitButton
              text={ t("SIGN_IN") }
              onClick={ handleSubmit }
              isDisabled={ isShowError }
            />
          </FormStyled>
        ) }
      </Formik>
      <SnackbarError
        open={ isShowError }
        onClose={ toggleIsShowError }
        autoHideDuration={ 2000 }
        message={t("EXIST_USER_ERROR_MESSAGE")}
      />
    </>
  );
};
