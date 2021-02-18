import React from 'react';

import { styled } from '../styles';

interface ITextButtonStyledProps {
  isDisabled?: boolean
}

const TButtonWrapper = styled.div<ITextButtonStyledProps>`
  width: max-content;
  height: max-content;
  padding-top: 8px;
  padding-left: 32px;
  cursor: pointer;
  color: ${ ({ theme, isDisabled }) => isDisabled ? theme.colors.gray : theme.colors.black };
`;

interface ITextButtonProps extends React.ComponentPropsWithoutRef<'div'> {
  text: string;
  isDisabled?: boolean;
  onClick: () => void;
}

export const TextButton: React.FC<ITextButtonProps> = props => {
  const { text, onClick, isDisabled } = props;
    return (
        <TButtonWrapper onClick={onClick} isDisabled={isDisabled}>
          {text}
        </TButtonWrapper>
    );
};
