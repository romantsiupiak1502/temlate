import React from 'react';
import { useTranslation } from 'react-i18next';

import { TextButton } from '../../components';
import { LanguagesConst } from '../../consts';
import { styled } from '../../styles';

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILanguageModalContentProps {
  onLanguageChangeClick: (language: LanguagesConst) => void;
}

export const LanguageModalContent: React.FC<ILanguageModalContentProps> = props => {
  const { onLanguageChangeClick } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      { Object.values(LanguagesConst).map((item) =>
        <TextButton text={ t(item) } onClick={ () => onLanguageChangeClick(item) }/>
      ) }
    </Wrapper>
  );
};
