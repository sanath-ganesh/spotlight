import React, { useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  createTheme,
  ThemeProvider,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { search } from '../services/api-services';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontSize: '2.4rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        },
        body1: {
          fontSize: '1rem',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 56,
          height: 56,
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

type Authority = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  location: string;
  role?: string;
  imageUrl?: string;
};

const countries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 
  'India', 'Germany', 'France', 'Spain', 'Brazil', 'China', 
  'Japan', 'Russia', 'Italy', 'Netherlands', 'Sweden'
];

const AuthoritiesList: React.FC = () => {

  const [authorities, setAuthorities] = useState<Authority[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [selectedUserType, setSelectedUserType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  useEffect(() => {
    const fetchAuthorities = async () => {
      try {
        const data = await search<Authority>('/user');
        const filteredAuthorities = data.filter(data =>
          data.userType.startsWith('Authority_')
        );

        const filters = filteredAuthorities.filter(authority =>
          (selectedUserType ? authority.userType === selectedUserType : true) &&
          (selectedLocation ? authority.location === selectedLocation : true)
        );
        setAuthorities(filters);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch authorities');
        setLoading(false);
      }
    };
  
    fetchAuthorities();
  }, [selectedUserType, selectedLocation]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  const listItemHoverStyle = {
    '&:hover': {
      backgroundColor: grey[200],
      boxShadow: theme.shadows[3],
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, padding: theme.spacing(3) }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h2" component="h1">
              Meet the Authorities
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
              Your Advocates in Upholding Human Rights
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel id="user-type-select-label">Authority Type</InputLabel>
              <Select
                labelId="user-type-select-label"
                value={selectedUserType}
                label="Authority Type"
                onChange={e => setSelectedUserType(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Authority_LocalGovernment">Local Government</MenuItem>
                <MenuItem value="Authority_NationalAgency">National Agency</MenuItem>
                <MenuItem value="Authority_InternationalNGO">International NGO</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="location-select-label">Location</InputLabel>
            <Select
              labelId="location-select-label"
              value={selectedLocation}
              label="Location"
              onChange={e => setSelectedLocation(e.target.value)}
            >
              <MenuItem value="">All Locations</MenuItem>
              {countries.map((country) => (
                <MenuItem key={country} value={country}>{country}</MenuItem>
              ))}
            </Select>
          </FormControl>

          </Grid>
          <Grid item xs={12}>
            {loading ? (
              <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress />
              </Box>
            ) : error ? (
              <Typography color="error">{error}</Typography>
            ) : authorities.length > 0 ? (
              <List>
                {authorities.map((authority) => (
                  <React.Fragment key={authority._id}>
                    <ListItem alignItems="flex-start" sx={listItemHoverStyle}>
                      <ListItemAvatar>
                        <Avatar src={authority.imageUrl || '/default-avatar.png'} alt={authority.username} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${authority.firstName} ${authority.lastName}`}
                        secondary={
                          <>
                            {authority.email}
                            <br />
                            <Typography component="span" variant="body2" color="textPrimary">
                              {authority.userType.replace('Authority_', '').split(/(?=[A-Z])/).join(" ")}
                            </Typography>
                            <Typography component="span" variant="body2" color="textPrimary">
                              {` - ${authority.location}`}
                            </Typography>
                          </>
                        }
                        sx={{ ml: 2 }}
                      />

                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
              </List>
            ) : (
              <Typography textAlign="center" sx={{ mt: 4 }}>
                No authorities found matching the selected criteria.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default AuthoritiesList;