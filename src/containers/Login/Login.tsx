import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

import { styled } from '../../styles';
import { Button, InputField, PasswordInput } from "../../components";
import loginLandscape from '../../img/loginLandscape.jpg';

const Container = styled.div`
  width: 1000px;
  height: 600px;
  display: flex;
  box-shadow: 5px 5px 5px gray;
  border: 1px solid;
  background-color: ${({theme})=> theme.colors.white};
`;

const InputContainer = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.div`
  width: 550px;
  height: 600px;
`;

const InputPass = styled(PasswordInput)`margin-top: 20px;`;
const SubmitButton = styled(Button)`
  margin-top: 30px;
  margin-left: 20px
`;

interface Values {
  email: string;
  password: string;
}

export const Login = () => {
  return (
    <Container>
      <Formik
        initialValues={ {
          email: '',
          password: '',
        }}
        onSubmit={ () => {} }
      >
        <InputContainer>
          <Form>
            <Field name="email" placeholder="Enter your email" component={InputField}/>
            <Field name="password" placeholder="Enter your password" component={InputPass}/>
            <SubmitButton type="submit" text='Submit' onClick={()=>{}}>Submit</SubmitButton>
          </Form>
        </InputContainer>
      </Formik>
      <Picture>
        <img src={loginLandscape} />
      </Picture>
    </Container>
  );
};

