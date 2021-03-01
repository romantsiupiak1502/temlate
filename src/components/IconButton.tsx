import React from 'react';

import { styled } from '../styles';

import { H3 } from "./Text";

const IButtonWrapper = styled.div`
  width: max-content;
  height: max-content;
  padding-top: 8px;
  padding-left: 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface IconButtonProps {
  text: string,
  icon: React.ReactElement,
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
}

export const IconButton: React.FC<IconButtonProps> = props => {
  const { text, icon, onClick } = props;
    return (
        <IButtonWrapper onClick={(onClick)}>
          {icon}
          <H3>{text}</H3>
        </IButtonWrapper>
    );
};
