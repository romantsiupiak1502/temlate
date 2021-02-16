import React from 'react';

import { styled } from '../styles';
import { H3 } from "./Text";
import { MdSmokeFree } from 'react-icons/md';

const IButtonWrapper = styled.div`
  width: max-content;
  height: max-content;
  padding-top: 8px;
  padding-left: 32px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

type Props = {
  text: string,
  icon: () => void,
  onClick: ()=> void,
}

export const IconButton: React.FC<Props>= ({text, icon, onClick}) => {
    return (
        <IButtonWrapper onClick={onClick}>
          {icon()}
          <H3>{text}</H3>
        </IButtonWrapper>
    );
}