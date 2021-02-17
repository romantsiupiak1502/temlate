import React from 'react';
import { Route, Switch } from "react-router-dom";

import { styled } from '../../styles';

import { Greeting } from "../Login";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=> theme.colors.backgroundGray};
`;

export const UnauthorizedRoot: React.FC = () => {
  return (
    <Wrapper>
      <Switch>
        <Route path={'/'} render={ () => <Greeting /> } />
      </Switch>
    </Wrapper>
  );
};
