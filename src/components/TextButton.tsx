import React from 'react';

import { styled } from '../styles';
import { ButtonText } from './Text';

interface ITextButtonStyledProps {
  isDisabled?: boolean
}

const TextButtonWrapper = styled.div<ITextButtonStyledProps>`
  width: max-content;
  height: max-content;
  padding-top: 8px;
  padding-left: 32px;
  cursor: pointer;
  color: ${ ({ theme, isDisabled }) => isDisabled ? theme.colors.gray : theme.colors.black };
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
          <ButtonText>
            {text}
          </ButtonText>
        </TextButtonWrapper>
    );
};
