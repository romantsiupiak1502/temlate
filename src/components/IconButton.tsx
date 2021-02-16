import React from 'react';

import { styled, theme } from '../styles';
import { MdSmokeFree } from 'react-icons/md';

const IButtonWrapper = styled.div`
  width: max-content;
  height: max-content;
  padding: 8px 32px;
  border-radius: 10px;
  background-color: ${theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Text = styled.div`
  padding-left: 10px;
  font-size: 120%;
`;

export const IconButton = () => {
    return (
      <>
        <IButtonWrapper onClick={()=>{alert("Do not smoke, by healthy")}}>
            <MdSmokeFree size={'30px'}/>
            <Text>Don't Smoke</Text>
        </IButtonWrapper>
      </>
    );
}