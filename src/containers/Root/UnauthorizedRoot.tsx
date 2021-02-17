import React from 'react';

import { styled } from '../../styles';

import { Login } from "../Login";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=> theme.colors.backgroundGray};
`;

export const UnauthorizedRoot: React.FC = () => {
  return (
    <Container>
      <Login />
    </Container>
  );
};
