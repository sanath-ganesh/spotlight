import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import PeopleIcon from '@mui/icons-material/People';
import { Avatar, Chip } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);




const NavBar = () => {
  const navigate = useNavigate();
  const routeChangeToUser = () => {
    let path = `user`;
    navigate(path);
  }
  const routeChangeToHome = () => {
    let path = `homePage`;
    navigate(path);
  }

  const routeChangeToAuthorities = () => {
    let path = `authorities`;
    navigate(path);
  }

  const routeChangeToPostIssue = () => {
    let path = `post-issue`;
    navigate(path);
  }


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const listStyle = {
    color: 'black',
    width: '95%',
    m: 1,
    p: 2,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#86b7cf',
    },
  };

  return (
    <Box sx={{
      gridColumn: '1',
      gridRow: '1',
    }} >
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', backgroundColor: '#2D4252' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1, fontWeight: '800' }}>
            spotlight
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{
        backgroundColor: '#2D4252',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
        columnGap: '5rem',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
          backgroundColor: '#2D4252',

        },
      }} >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem onClick={routeChangeToUser} sx={
            {
              m: 0,
              p: 0,
            }
          }>
            <Box sx={{
              display: 'flex',
              p: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              padding: '1rem',
              borderRadius: '1rem',
              gap: '0.5rem',
              color: 'black',
              cursor: 'pointer'
            }} >
              <Avatar sx={{
                width: '2em',
                height: '2em',
                bgcolor: deepOrange[500]
              }}>
                J
              </Avatar>
              <div>
                <Typography variant="h6" gutterBottom>
                  John_Doe_90
                </Typography>
                <Chip color='success' avatar={<LocalPoliceIcon sx={{ color: deepPurple[500], width: '1rem' }} />} label="Authority/Normal" />
              </div>
            </Box>


          </ListItem>
          <Divider />
          <ListItem onClick={routeChangeToPostIssue} sx={listStyle}>
            <ListItemIcon><ReportProblemIcon /></ListItemIcon>
            <ListItemText primary="Create New Issue" />
          </ListItem>
          <Divider />
          <ListItem onClick={routeChangeToHome} sx={listStyle}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem onClick={routeChangeToAuthorities} sx={listStyle}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Authorities" />
          </ListItem>
          <Divider />
          <ListItem sx={listStyle}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </Box>
  );
}

export default NavBar;