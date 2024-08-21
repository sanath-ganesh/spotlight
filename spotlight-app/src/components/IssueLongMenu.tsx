import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const options = [
    'Delete',
    'Report',
];

const ITEM_HEIGHT = 48;

type CommentLongMenuProps = {
    anchorEl: null | HTMLElement;
    open: boolean;
    handleClick: (event: React.MouseEvent<HTMLElement>) => void;
    handleClose: () => void;
}

export default function IssueLongMenu(props: CommentLongMenuProps) {
  return (
    <div>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={props.handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}