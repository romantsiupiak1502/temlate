import React from 'react';

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
  return (
    <Wrapper>
      { Object.values(LanguagesConst).map((item) =>
        <TextButton
          text={ item }
          onClick={ () => onLanguageChangeClick(item) }
        />
      ) }
    </Wrapper>
  );
};
