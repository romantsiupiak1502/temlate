import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
import { ConfirmationButton } from '../../components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 32px;
`;

interface ILogoutModalContentProps {
  onCancelClick: () => void;
  onConfirmClick: () => void;
}

export const LogoutModalContent: React.FC<ILogoutModalContentProps> = props => {
  const { onCancelClick, onConfirmClick } = props;
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ConfirmationButton
        confirmButtonText={ t("CONFIRM") }
        confirmButtonOnClick={ onConfirmClick }
        denyButtonText={ t("CANCEL") }
        denyButtonOnClick={ onCancelClick }
        isConfirmButtonRed={true}
      />
    </Wrapper>
  );
};
