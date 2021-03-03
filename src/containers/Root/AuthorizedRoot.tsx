import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { styled } from '../../styles';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { UsersContainer } from '../Users';

const Wrapper = styled.div`
  width: 1500px;
  height: 100%;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AuthorizedRoot: React.FC = () => {
  return (
    <Wrapper>
      <Header onLogoutClick={ () => {
      } } onChangeLanguage={ () => {
      } } userName='Roman Tsiuapiak'/>
      <ContentWrapper>
        <ContentContainer>
          <Switch>
            <Route path='/' component={ UsersContainer }/>
          </Switch>
        </ContentContainer>
        <Sidebar/>
      </ContentWrapper>
    </Wrapper>
  );
};
