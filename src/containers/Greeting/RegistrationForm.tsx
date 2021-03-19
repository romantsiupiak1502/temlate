import React from 'react';
import { Field, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { InputField, PasswordInputField } from '../../components';
import { device, styled } from '../../styles';
import { formErrorUtil } from '../../utils';

import { FormStyled, SubmitButton, InputFieldStyled } from './LoginForm';

const FieldsRow = styled.div`
  width: 100%;
  display: flex;
  
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const InputFieldStyledAdaptive = styled(InputField)`
  @media ${device.laptop} {
    width: 92%;
  }
`;

const PasswordInputStyled = styled(PasswordInputField)`
  @media ${device.laptop} {
    width: 92%;
  }
`;

export const RegistrationForm = () => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={ {
        fullName: '',
        email: '',
        password: '',
        repeatPassword: '',
      } }
      onSubmit={ () => {} }
    >
      { ({ values }) => (
        <FormStyled>
          <FieldsRow>
            <Field
              name="name"
              placeholder={t("ENTER_YOUR_NAME")}
              validate={ formErrorUtil.required }
              component={ InputFieldStyledAdaptive }
            />
            <Field
              name="surname"
              placeholder={t("ENTER_YOUR_SURNAME")}
              validate={ formErrorUtil.required }
              component={ InputFieldStyledAdaptive }
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
              component={ PasswordInputStyled }
            />
            <Field
              name="repeatPassword"
              placeholder={t("REPEAT_PASSWORD")}
              validate={ (value: string) => formErrorUtil.passwordRequirements(values.password, value) }
              component={ PasswordInputStyled }
            />
          </FieldsRow>
          <SubmitButton
            type='submit'
            text={ t("SIGN_UP") }
            onClick={ () => {} }
          />
        </FormStyled>
      ) }
    </Formik>
  );
}
