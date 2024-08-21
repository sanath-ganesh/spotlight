import React, { useState } from 'react';
import { Button, TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem, Stack, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { RegisterUser } from '../services/user-services';
import { useNavigate } from "react-router-dom";
import { Autocomplete } from '@mui/lab';

/**
 * Component for user registration.
 */
const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [location, setLocation] = useState('');
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('User');

  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 
    'India', 'Germany', 'France', 'Spain', 'Brazil', 'China', 
    'Japan', 'Russia', 'Italy', 'Netherlands', 'Sweden'
  ];

  // Hook to navigate to login page
  let navigate = useNavigate(); 
  const routeChangeToLogin = () =>{ 
    let path = '/login'; 
    navigate(path);
  }

  // Handle registration form submission
  const handleRegistration = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    if (userType.startsWith("Authority") && userType === 'User') {
      alert("Please select a valid authority type.");
      return;
    }

    try {
      // Call the RegisterUser function from user-service.ts with the user data
      await RegisterUser({
        firstName,
        lastName,
        email,
        phone: {
          countryCode,
          phone
        },
        location,
        username,
        password,
        userType
      });

      // Registration successful
      alert("Registration successful!");
      routeChangeToLogin();

    } catch (error) {
      // Registration failed
      console.error('Error registering user:', error);
      alert('An error occurred while registering. Please try again later.');
    }
  };
    
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box sx={{ width: 400, maxWidth: '100%' }} component="form" onSubmit={handleRegistration}>
        <img src="../../public/logo.jpg" alt="Logo" style={{
          width: '200px', height: '150px',
          borderRadius: '50%', margin: '5px', position: 'relative', left: '6vw'
        }} />
        <Typography component="h1" variant="h5" textAlign="center">
          Register
        </Typography>
        {/* Form fields */}
        {/* First Name */}
        <TextField margin="normal" required fullWidth
          id="firstName" label="First Name" name="firstName"
          autoFocus value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {/* Last Name */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {/* Authority Type Switch */}
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={userType.startsWith("Authority")} onChange={(e) => {
              setUserType(e.target.checked ? 'Authority_' : 'User');
            }} />}
            label="I am registering as an authority"
          />
        </FormGroup>
        {/* Authority Type Select */}
        <FormControl fullWidth disabled={!userType.startsWith("Authority")}>
          <InputLabel id="user-type-label">Authority Type</InputLabel>
          <Select
            labelId="user-type-label"
            id="user-type"
            value={userType}
            label="Authority Type"
            onChange={(e) => setUserType(e.target.value)}
            displayEmpty
          >
            <MenuItem value="User"><em>None</em></MenuItem>
            <MenuItem value="Authority_LocalGovernment">Local Government</MenuItem>
            <MenuItem value="Authority_NationalAgency">National Agency</MenuItem>
            <MenuItem value="Authority_InternationalNGO">International NGO</MenuItem>
          </Select>
        </FormControl>
        {/* Email */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Country Code and Phone Number */}
        <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="country-code-label">Country Code</InputLabel>
            <Select
              labelId="country-code-label"
              id="country-code"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <MenuItem value="+1">+1 (USA)</MenuItem>
              <MenuItem value="+44">+44 (UK)</MenuItem>
              <MenuItem value="+91">+91 (India)</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => {
              const re = /^[0-9\b]+$/; // Regular expression to match only numbers
              if (e.target.value === '' || re.test(e.target.value)) {
                setPhone(parseInt(e.target.value, 10));
              }
            }}
          />
        </Stack>
        {/* Location */}
        <Autocomplete
          freeSolo
          id="location"
          disableClearable
          options={countries}
          value={location}
          onChange={(event, newValue) => {
            setLocation(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Location"
              margin="normal"
              required
              fullWidth
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
        {/* Username */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* Password */}
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          type="password"
          id="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Confirm Password */}
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          type="password"
          id="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* Buttons */}
        <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="error"
            onClick={routeChangeToLogin}
            sx={{ mt: 1 }}
          >
            Back to Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Registration;
