import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Options for the comment long menu
const options = [
    'Delete',
    'Report',
];

// Height of each menu item
const ITEM_HEIGHT = 48;

// Props for the CommentLongMenu component
type CommentLongMenuProps = {
    anchorEl: null | HTMLElement; // Anchor element for the menu
    open: boolean; // Whether the menu is open or not
    handleClick: (event: React.MouseEvent<HTMLElement>) => void; // Function to handle click event
    handleClose: () => void; // Function to handle closing the menu
}

// Component for rendering the long menu for comments
export default function CommentLongMenu(props: CommentLongMenuProps) {
  return (
    <div>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={props.anchorEl} // Anchor element for the menu
        open={props.open} // Whether the menu is open or not
        onClose={props.handleClose} // Function to handle closing the menu
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