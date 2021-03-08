import React from 'react';

import { TextButton } from '../../components';

interface ILanguageModalContentProps {
  onEnglishClick: () => void;
  onUkraineClick: () => void;
}

export const LanguageModalContent: React.FC<ILanguageModalContentProps> = props => {
  const { onEnglishClick, onUkraineClick } = props;
  return (
    <>
      <TextButton text='English' onClick={onEnglishClick} />
      <TextButton text='Ukraine' onClick={onUkraineClick} />
    </>
  );
};
