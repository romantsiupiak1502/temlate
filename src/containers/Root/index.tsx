import React from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '../../store/types';
import { styled } from '../../styles';
import { useModal } from '../../hooks/useModal';

import { AuthorizedRoot } from './AuthorizedRoot';
import { UnauthorizedRoot } from "./UnauthorizedRoot";
import { LogoutModalContent } from './LogoutModalContent';
import { LanguageModalContent } from './LanguageModalContent';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Root = () => {
  const { isLoggedIn } = useSelector((state: IStore) => state.auth);
  const LogoutModal = useModal();
  const LanguageModal = useModal();
  const AddUserModal = useModal();

  return (
    <Wrapper>
      { isLoggedIn ? (
        <>
          <LogoutModal.Modal title='Do you want to logout?'>
            <LogoutModalContent onNoClick={LogoutModal.closeModal} onYesClick={LogoutModal.closeModal}/>
          </LogoutModal.Modal>
          <LanguageModal.Modal title='Choose language'>
            <LanguageModalContent onEnglishClick={LanguageModal.closeModal} onUkraineClick={LanguageModal.closeModal}/>
          </LanguageModal.Modal>
          <AuthorizedRoot
            onLogoutClick={LogoutModal.openModal}
            onLanguageClick={LanguageModal.openModal}
            onAddUserClick={AddUserModal.openModal}
          />
        </>
      ) : (
        <UnauthorizedRoot/>
      ) }
      <div id="modals"/>
    </Wrapper>
  );
};
