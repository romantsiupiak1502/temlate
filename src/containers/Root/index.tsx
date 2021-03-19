import React from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '../../store/types';
import { styled, device } from '../../styles';

import { AuthorizedRoot } from './AuthorizedRoot';
import { UnauthorizedRoot } from "./UnauthorizedRoot";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media ${device.laptopL} {
    max-width: 100%;
  }
  @media ${device.desktop} {
    max-width: 100%;
  }
`;

export const Root = () => {
  const { isLoggedIn } = useSelector((state: IStore) => state.auth);

  return (
    <Wrapper>
      { isLoggedIn ? (
        <AuthorizedRoot />
      ) : (
        <UnauthorizedRoot/>
      ) }
      <div id="modals"/>
    </Wrapper>
  );
};
