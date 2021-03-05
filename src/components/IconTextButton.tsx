import React from 'react';

import { styled } from '../styles';

import { H3 } from "./Text";

interface IconButtonStyledProps {
  isDisabled?: boolean;
};

const IconButtonWrapper = styled.div<IconButtonStyledProps>`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ ({ theme, isDisabled }) => isDisabled ? theme.colors.gray : theme.colors.primary };
  cursor: pointer;
`;

interface IconButtonProps {
  text: string;
  icon: React.ReactElement;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  isDisable?: boolean;
}

export const IconTextButton: React.FC<IconButtonProps> = props => {
  const { text, icon, onClick, isDisable } = props;
    return (
        <IconButtonWrapper onClick={onClick} isDisabled={isDisable}>
          {icon}
          <H3>{text}</H3>
        </IconButtonWrapper>
    );
};
