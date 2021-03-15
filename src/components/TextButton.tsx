import React from 'react';

import { styled } from '../styles';

import { ButtonText } from './Text';

export interface ITextButtonStyledProps {
  isDisabled?: boolean
}

export const TextButtonWrapper = styled.div<ITextButtonStyledProps>`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${ ({ theme, isDisabled }) => isDisabled ? theme.colors.gray : theme.colors.primary };
  border: 1px solid ${ ({ theme }) => theme.colors.primary };
  border-radius: 8px;
  margin-top: 8px;

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
    <TextButtonWrapper onClick={ onClick } isDisabled={ isDisabled }>
      <ButtonText>
        { text }
      </ButtonText>
    </TextButtonWrapper>
  );
};
