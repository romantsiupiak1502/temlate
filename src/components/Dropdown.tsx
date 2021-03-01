import { DropdownArrowIcon } from './icons';
import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

import { IconButton } from './IconButton';

type IDropdownItem = {
  text: string;
  icon: React.ReactElement;
  onClick: ()=>void;
}

interface IDropdownProps {
  items: Array<IDropdownItem>;
}

export const Dropdown: React.FC<IDropdownProps> = props => {
  const { items } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-controls='menu'
        aria-haspopup='true'
        text=''
        icon={<DropdownArrowIcon />}
        onClick={handleClick} />
      <Menu
        id='menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          items.map( (item) =>
            <MenuItem onClick={handleClose}>
              <IconButton text={item.text} icon={item.icon} onClick={item.onClick}/>
            </MenuItem> )
        }
      </Menu>
    </>
  );
};
