import React from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '../../store/types';
import { styled } from '../../styles';

import { AuthorizedRoot } from './AuthorizedRoot';
import { UnauthorizedRoot } from "./UnauthorizedRoot";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
