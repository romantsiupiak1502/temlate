import React from 'react';

import { styled } from '../../styles';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

const Wrapper = styled.div`
  width: 1500px;
  height: 100%;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const AuthorizedRoot: React.FC = () => {
  return (
    <Wrapper>
      <Header onLogoutClick={ () => {}} onChangeLanguage={ () => {} } userNameInitials='RT'/>
      <ContentWrapper>
        <div></div>
        <Sidebar />
      </ContentWrapper>
    </Wrapper>
  );
};
