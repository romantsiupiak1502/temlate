import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';

import { styled } from '../../styles';
import { InputField, Button } from '../../components';
import { formErrorUtil } from '../../utils';
import { IAddUserType } from '../../store/users';

const FormStyled = styled(Form)`
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputFieldLongStyled = styled(InputField)`
  width: 345px;
`;

const InputFieldStyled = styled(InputField)`
  width: 160px;
`;

const ButtonStyled = styled(Button)`
  margin-top: 32px;
`;

const RowInputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

interface IAddUserModalContentProps {
  onSubmitButtonClick: (values: IAddUserType) => void;
  closeAddUserModal: () => void
}

export const AddUserModalContent: React.FC<IAddUserModalContentProps> = props => {
  const { onSubmitButtonClick, closeAddUserModal } = props;
  const { t } = useTranslation();

  return (
    <Formik initialValues={ {
      name: '',
      surname: '',
      email: '',
      city: '',
      street: '',
      suit: '',
      zipcode: '',
      phone: '',
      website: '',
    } } onSubmit={ (values) => {
      onSubmitButtonClick(values);
      closeAddUserModal();
    } }>
      { ({ handleSubmit }) => (
        <FormStyled>
          <RowInputContainer>
            <Field
              name='name'
              placeholder={t("NAME")}
              validate={ formErrorUtil.required }
              component={ InputFieldStyled }
            />
            <Field
              name='surname'
              placeholder={t("SURNAME")}
              validate={ formErrorUtil.required }
              component={ InputFieldStyled }
            />
          </RowInputContainer>
          <Field
            name='email'
            placeholder={t("EMAIL")}
            validate={ formErrorUtil.combineValidation([formErrorUtil.required, formErrorUtil.email]) }
            component={ InputFieldLongStyled }
          />
          <RowInputContainer>
            <Field
              name='city'
              placeholder={t("CITY")}
              validate={ formErrorUtil.required }
              component={ InputFieldStyled }
            />
            <Field
              name='street'
              placeholder={t("STREET")}
              validate={ formErrorUtil.required }
              component={ InputFieldStyled }
            />
          </RowInputContainer>
          <RowInputContainer>
            <Field
              name='suit'
              placeholder={t("SUIT")}
              validate={ formErrorUtil.required }
              component={ InputFieldStyled }
            />
            <Field
              name='zipcode'
              placeholder={t("ZIPCODE")}
              validate={ formErrorUtil.required }
              component={ InputFieldStyled }
            />
          </RowInputContainer>
          <RowInputContainer>
            <Field
              name='phone'
              placeholder={t("PHONE")}
              validate={ formErrorUtil.required }
              component={ InputFieldStyled }
            />
            <Field
              name='website'
              placeholder={t("WEBSITE")}
              validate={ formErrorUtil.required }
              component={ InputFieldStyled }
            />
          </RowInputContainer>
          <ButtonStyled text={t("ADD")} onClick={ handleSubmit }/>
        </FormStyled>
      ) }
    </Formik>
  );
};
