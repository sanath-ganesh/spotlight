import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleIcon from '@mui/icons-material/People';

interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
      <List>
        <ListItem button>
          <ListItemIcon><ReportProblemIcon /></ListItemIcon>
          <ListItemText primary="Report Issue" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><CommentIcon /></ListItemIcon>
          <ListItemText primary="Comments" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Authorities" />
        </ListItem>
      </List>
    </Drawer>
  );
};