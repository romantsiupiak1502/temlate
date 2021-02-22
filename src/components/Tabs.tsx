import React from 'react';

import { styled } from '../styles';

import { H3 } from './Text';

interface ITabStyledProps {
  isActive: boolean;
}

const TabStyled = styled(H3)<ITabStyledProps>`
  padding-left: 40px;
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
    <TabStyled className={"Selected"} onClick={onClick} isActive={isActive}>
      {text}
    </TabStyled>
  );
}
