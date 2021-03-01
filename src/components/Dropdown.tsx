import { Icon } from "@material-ui/core";
import React, { ReactElement } from 'react';

import { styled } from '../styles';

import { IconButton } from './IconButton';

const DropdownWrapper = styled.div`
  width: 200px;
  position: absolute;
  top: 80px;
  right: 150px;
  border: 1px solid;
  border-radius: 8px;
  background-color: ${ ({ theme }) => theme.colors.backgroundGray };
`;

interface IDropdownProps {
  items: Array<{text: string, icon: ReactElement, onClick: ()=>void}>;
}

export const Dropdown: React.FC<IDropdownProps> = props => {
  const { items } = props;
  return (
    <DropdownWrapper>
      {
        items.map( (item) => <IconButton
            text={item.text}
            icon={item.icon}
            onClick={item.onClick}
          /> )
      }
      {/*<IconButton text={text} icon={icon} onClick={ () => {} } />*/}
    </DropdownWrapper>
  );
};
