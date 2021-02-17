import React from 'react';
import {Switch, Route} from 'react-router-dom';

import { styled } from '../../styles';
import { LoginLandscapeImage } from "../../assets";

import { LoginForm } from "./LoginForm";

const Wrapper = styled.div`
  width: 1000px;
  height: 600px;
  display: flex;
  box-shadow: 5px 5px 5px gray;
  border: 1px solid;
  background-color: ${({theme})=> theme.colors.white};
`;

const InputWrapper = styled.div`
  width: 500px;
  height: 600px;
`;

const Picture = styled.img`
  width: 500px;
  height: 600px;
`;

export const Login = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <Switch>
          <Route path={'/'} render={ () => <LoginForm /> } />
        </Switch>
      </InputWrapper>
      <Picture src={ LoginLandscapeImage }/>
    </Wrapper>
  );
};

