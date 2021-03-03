import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { styled } from '../../styles';

import { Header } from './Header';
import { UsersContainer } from '../Users';

const Wrapper = styled.div`
  width: 1500px;
  height: 100%;
`;

export const AuthorizedRoot: React.FC = () => {
  return (
    <Wrapper>
      <Header onLogoutClick={ () => {} } onChangeLanguage={ () => {} } userName='Roman Tsiuapiak'/>
      <Switch>
        <Route path='/' component={ UsersContainer }/>
      </Switch>
    </Wrapper>
  );
};
