import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { styled } from '../../styles';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { UsersContainer } from '../Users';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  height: calc(100vh - 80px);
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
`;

export const AuthorizedRoot: React.FC = () => {
  return (
    <>
      <Header onLogoutClick={ () => {
      } } onChangeLanguage={ () => {
      } } userName='Roman Tsiuapiak'/>
      <Wrapper>
          <ContentContainer>
            <Switch>
              <Route path='/' component={ UsersContainer }/>
            </Switch>
          </ContentContainer>
          <Sidebar/>
      </Wrapper>
    </>
  );
};
