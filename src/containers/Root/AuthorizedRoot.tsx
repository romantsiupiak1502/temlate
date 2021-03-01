import React from 'react';

import { styled } from '../../styles';

import { Header } from './Header';

const Wrapper = styled.div`
  width: 1500px;
  height: 100%;
`;

export const AuthorizedRoot: React.FC = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};
