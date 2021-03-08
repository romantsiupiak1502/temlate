import React from 'react';

import { styled } from '../styles';
import { H3 } from './Text';

interface ITextButtonStyledProps {
  isDisabled?: boolean
}

const TextButtonWrapper = styled.div<ITextButtonStyledProps>`
  width: max-content;
  height: max-content;
  padding: 16px;
  cursor: pointer;
  color: ${ ({ theme, isDisabled }) => isDisabled ? theme.colors.gray : theme.colors.primary };
  &:hover {
  background-color: ${ ({ theme }) => theme.colors.backgroundGray };
}
`;

interface ITextButtonProps {
  text: string;
  isDisabled?: boolean;
  onClick: () => void;
}

export const TextButton: React.FC<ITextButtonProps> = props => {
  const { text, onClick, isDisabled } = props;
    return (
        <TextButtonWrapper onClick={onClick} isDisabled={isDisabled}>
          <H3>
            {text}
          </H3>
        </TextButtonWrapper>
    );
};
