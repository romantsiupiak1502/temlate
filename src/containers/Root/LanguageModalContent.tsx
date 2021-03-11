import React from 'react';
import { useTranslation } from 'react-i18next';

import { TextButton, ITextButtonStyledProps, TextButtonWrapper } from '../../components';
import { LanguagesConst } from '../../consts';
import { styled } from '../../styles';

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextButtonContainer = styled.div<ITextButtonStyledProps>`
  ${ TextButtonWrapper };
  padding: 8px 64px;
  
  &:hover {
    border: 1px solid ${ ({ theme }) => theme.colors.primary };
    background-color: ${ ({ theme }) => theme.colors.backgroundGray };
    border-radius: 8px;
  }
`;

interface ILanguageModalContentProps {
  onLanguageChangeClick: (language: LanguagesConst) => void;
}

export const LanguageModalContent: React.FC<ILanguageModalContentProps> = props => {
  const { onLanguageChangeClick } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      { Object.entries(LanguagesConst).map((item) =>
        <TextButtonContainer>
          <TextButton text={item[0]} onClick={ () => onLanguageChangeClick(item[1]) }/>
        </TextButtonContainer>
      ) }
    </Wrapper>
  );
};
