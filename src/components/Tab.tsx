import React from 'react';

import { styled } from '../styles';

import { H3 } from './Text';

interface ITabStyledProps {
  isActive: boolean;
}

export const TabsWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabStyled = styled.div<ITabStyledProps>`
  padding: 16px;
  color: ${ ({theme, isActive}) => isActive ? theme.colors.black : theme.colors.gray };
  border-bottom: 2px solid ${ ({theme, isActive}) => isActive ? theme.colors.black : theme.colors.white };
  cursor: pointer;
`;

interface ITabProps {
  onClick: () => void;
  isActive: boolean;
  text: string;
}

export const Tab: React.FC<ITabProps> = props => {
  const { onClick, isActive, text } = props;
  return (
    <TabStyled onClick={onClick} isActive={isActive}>
      <H3>
        {text}
      </H3>
    </TabStyled>
  );
}
