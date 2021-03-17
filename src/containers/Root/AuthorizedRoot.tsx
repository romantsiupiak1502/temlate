import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IStore } from "store/types";

import { styled } from '../../styles';
import { useModal } from '../../hooks';
import { languageService } from '../../services';
import { handleLogoutAction } from '../../store/auth';

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
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: IStore) => state.auth)
  const { openModal: openLogoutModal, closeModal: closeLogoutModal, Modal: LogoutModal } = useModal();
  const { openModal: openLanguageModal, closeModal: closeLanguageModal, Modal: LanguageModal } = useModal();

  return (
    <Wrapper>
      <Header
        onLogoutClick={ openLogoutModal }
        onChangeLanguage={ openLanguageModal }
        userName={`${currentUser.name} ${currentUser.surname}`}
      />
      <ContentContainer>
        <Switch>
          <Route path='/' component={ UsersContainer }/>
        </Switch>
        <Sidebar
          onSearchByNameChange={ () => {} }
          onSearchByEmailChange={ () => {} }
          onAddUserClick={ () => {} }
        />
      </ContentContainer>
      <LogoutModal title={t("DO_YOU_WANT_TO_LOGOUT")}>
        <LogoutModalContent onCancelClick={ closeLogoutModal } onConfirmClick={ () => dispatch(handleLogoutAction()) }/>
      </LogoutModal>
      <LanguageModal title={t("CHANGE_LANGUAGE")} isClosable={true}>
        <LanguageModalContent onLanguageChangeClick={ language => {
          languageService.changeLanguage(language);
          closeLanguageModal();
        } }
        />
      </LanguageModal>
    </Wrapper>
  );
};
