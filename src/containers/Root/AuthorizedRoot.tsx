import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { styled } from '../../styles';
import { useModal } from '../../hooks/useModal';

import { UsersContainer } from '../Users';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { LogoutModalContent } from './LogoutModalContent';
import { LanguageModalContent } from './LanguageModalContent';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
`;

export const AuthorizedRoot: React.FC = () => {

  const {openModal: openLogoutModal, closeModal: closeLogoutModal, Modal: LogoutModal} = useModal();
  const {openModal: openLanguageModal, closeModal: closeLanguageModal, Modal: LanguageModal} = useModal();

  return (
    <Wrapper>
      <LogoutModal title='Do you want to logout?'>
        <LogoutModalContent onNoClick={closeLogoutModal} onYesClick={closeLogoutModal}/>
      </LogoutModal>
      <LanguageModal title='Choose language'>
        <LanguageModalContent onEnglishClick={closeLanguageModal} onUkraineClick={closeLanguageModal}/>
      </LanguageModal>
      <Header
        onLogoutClick={ openLogoutModal }
        onChangeLanguage={ openLanguageModal }
        userName='Roman Tsiuapiak'
      />
        <ContentContainer>
          <Switch>
            <Route path='/:id?' component={ UsersContainer }/>
          </Switch>
          <Sidebar
            onSearchByNameChange={ () => {} }
            onSearchByEmailChange={ () => {} }
          />
        </ContentContainer>
    </Wrapper>
  );
};
