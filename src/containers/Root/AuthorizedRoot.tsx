import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { styled } from '../../styles';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { UsersContainer } from '../Users';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
`;

export const AuthorizedRoot: React.FC = () => {
  return (
    <Wrapper>
      <Header
        onLogoutClick={ () => {} }
        onChangeLanguage={ () => {} }
        userName='Roman Tsiuapiak'
      />
      <Wrapper>
        <ContentContainer>
          <Switch>
            <Route path='/' component={ UsersContainer }/>
          </Switch>
          <Sidebar onNameChange={ () => {} } onEmailChange={ () => {} }/>
        </ContentContainer>
      </Wrapper>
    </Wrapper>
  );
};
