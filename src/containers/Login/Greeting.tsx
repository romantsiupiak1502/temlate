import React from 'react';

import { styled } from '../../styles';
import { LoginLandscapeImage } from "../../assets";

import { RegistrationForm } from './RegistrationForm';

const Wrapper = styled.div`
  width: 1000px;
  height: 600px;
  display: flex;
  box-shadow: 5px 5px 5px gray;
  border: 1px solid ${({theme})=>theme.colors.black};
  background-color: ${({theme})=> theme.colors.white};
`;

const InputWrapper = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img`
  width: 500px;
  height: 600px;
`;

export const Greeting = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <RegistrationForm />
      </InputWrapper>
      <Picture src={ LoginLandscapeImage }/>
    </Wrapper>
  );
};

