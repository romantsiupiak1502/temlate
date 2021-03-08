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

interface IAuthorizedRootProps {
  onLogoutClick: () => void;
  onLanguageClick: () => void;
  onAddUserClick: () => void;
}

export const AuthorizedRoot: React.FC<IAuthorizedRootProps> = props => {
  const { onLogoutClick, onLanguageClick, onAddUserClick } = props;

  return (
    <Wrapper>
      <Header
        onLogoutClick={ onLogoutClick }
        onChangeLanguage={ onLanguageClick }
        userName='Roman Tsiuapiak'
      />
      <Wrapper>
        <ContentContainer>
          <Switch>
            <Route path='/:id?' component={ UsersContainer }/>
          </Switch>
          <Sidebar
            onSearchByNameChange={ () => {} }
            onSearchByEmailChange={ () => {} }
            onAddUserClick={ onAddUserClick }
          />
        </ContentContainer>
      </Wrapper>
    </Wrapper>
  );
};
