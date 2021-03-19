import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
import { useModal } from '../../hooks';
import { languageService } from '../../services';
import {
  onSearchByNameChangeAction,
  onSearchByEmailChangeAction,
  sortByNameAction,
  sortByEmailAction,
  handleAddUserAction,
  IAddUserType
} from '../../store/users';

import { UsersContainer } from '../Users';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { LogoutModalContent } from './LogoutModalContent';
import { LanguageModalContent } from './LanguageModalContent';
import { AddUserModalContent } from './AddUserModalContent';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
`;

export const AuthorizedRoot: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { openModal: openLogoutModal, closeModal: closeLogoutModal, Modal: LogoutModal } = useModal();
  const { openModal: openLanguageModal, closeModal: closeLanguageModal, Modal: LanguageModal } = useModal();
  const { openModal: openAddUserModal, closeModal: closeAddUserModal, Modal: AddUserModal } = useModal();

  return (
    <Wrapper>
      <Header
        onLogoutClick={ openLogoutModal }
        onChangeLanguage={ openLanguageModal }
        userName='Roman Tsiuapiak'
      />
      <ContentContainer>
        <Switch>
          <Route path='/' component={ UsersContainer }/>
        </Switch>
        <Sidebar
          onSearchByNameChange={ (text) => dispatch(onSearchByNameChangeAction(text)) }
          onSearchByEmailChange={ (text) => dispatch(onSearchByEmailChangeAction(text)) }
          onSortByNameClick={ () => dispatch(sortByNameAction()) }
          onSortByEmailClick={ () => dispatch(sortByEmailAction()) }
          onAddUserClick={ openAddUserModal }
        />
      </ContentContainer>
      <LogoutModal title={ t("DO_YOU_WANT_TO_LOGOUT") }>
        <LogoutModalContent onCancelClick={ closeLogoutModal } onConfirmClick={ closeLogoutModal }/>
      </LogoutModal>
      <LanguageModal title={ t("CHANGE_LANGUAGE") } isClosable={ true }>
        <LanguageModalContent onLanguageChangeClick={ language => {
          languageService.changeLanguage(language);
          closeLanguageModal();
        } }
        />
      </LanguageModal>
      <AddUserModal title={t("ADD_USER")} isClosable={ true }>
        <AddUserModalContent
          onSubmitButtonClick={ (values: IAddUserType) =>
            dispatch(handleAddUserAction(values))}
          closeAddUserModal={ closeAddUserModal }
        />
      </AddUserModal>
    </Wrapper>
  );
};
