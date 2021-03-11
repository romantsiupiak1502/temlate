import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

import { IconTextButton } from './IconTextButton';

export interface IDropdownItem {
  text: string;
  icon: React.ReactElement;
  onClick: () => void;
}

interface IDropdownProps {
  items: IDropdownItem[];
  Component: React.ReactElement;
}

export const Dropdown: React.FC<IDropdownProps> = props => {
  const { items, Component } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        aria-controls='menu'
        aria-haspopup='true'
        onClick={ handleClick }
      >
        { Component }
      </div>
      <Menu
        getContentAnchorEl={ null }
        anchorOrigin={ {
          vertical: 'bottom',
          horizontal: 'center',
        } }
        transformOrigin={ {
          vertical: 'top',
          horizontal: 'center',
        } }
        id='menu'
        anchorEl={ anchorEl }
        keepMounted={ true }
        open={ Boolean(anchorEl) }
        onClose={ handleClose }
      >
        { items.map((item) =>
          <MenuItem onClick={ handleClose }>
            <IconTextButton
              text={ item.text }
              icon={ item.icon }
              onClick={ item.onClick }/>
          </MenuItem>
        ) }
      </Menu>
    </div>
  );
};
