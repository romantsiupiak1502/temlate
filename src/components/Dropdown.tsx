import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

import { DropdownArrowIcon } from './icons';
import { IconButton } from './IconButton';

export interface IDropdownItem {
  text: string;
  icon: React.ReactElement;
  onClick: () => void;
}

interface IDropdownProps {
  items: IDropdownItem[];
  userName: string;
}

export const Dropdown: React.FC<IDropdownProps> = props => {
  const { items, userName } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls='menu'
        aria-haspopup='true'
        text={ userName }
        icon={ <DropdownArrowIcon/> }
        onClick={ handleClick }/>
      <Menu
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id='menu'
        anchorEl={ anchorEl }
        keepMounted={ true }
        open={ Boolean(anchorEl) }
        onClose={ handleClose }
      >
        { items.map((item) =>
          <MenuItem onClick={ handleClose }>
            <IconButton
              text={ item.text }
              icon={ item.icon }
              onClick={ item.onClick }/>
          </MenuItem>
        ) }
      </Menu>
    </div>
  );
};