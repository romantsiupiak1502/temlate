import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
import { Button, TextButton } from '../../components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 32px;
`;

const ButtonStyled = styled(Button)`
  background-color: ${ ({ theme }) => theme.colors.red};
  margin-left: 16px;
`;

interface ILogoutModalContentProps {
  onNoClick: () => void;
  onYesClick: () => void;
}

export const LogoutModalContent: React.FC<ILogoutModalContentProps> = props => {
  const { onNoClick, onYesClick } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
        <TextButton text='no' onClick={ onNoClick }/>
        <ButtonStyled text='Yes, I want' onClick={ onYesClick }/>
    </Wrapper>
  );
};
