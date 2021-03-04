import React from 'react';

import { styled } from '../styles';

const IconButtonWrapper = styled.div`
  padding-left: 8px;
  padding-top: 8px;
  color: ${ ({ theme }) => theme.colors.primary };
  cursor: pointer;
`;

interface IIconButtonProps {
  icon: React.ReactElement;
  onClick: ()=> void;
};

export const IconButton: React.FC<IIconButtonProps> = props => {
  const { icon, onClick } = props;
  return (
    <IconButtonWrapper onClick={onClick}>
      {icon}
    </IconButtonWrapper>
  );
};