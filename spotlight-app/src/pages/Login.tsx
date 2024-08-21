import React, { useState } from 'react';
import { Button, TextField, Typography} from '@mui/material';
import { Box, Container } from '@mui/system';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/user-services';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation('common');
  const routeChangeToHome = () => {
    let path = `../home/homepage`;
    navigate(path,{replace:true});
  };

  const handleReg = () =>{ 
    let path = '/register'; 
    navigate(path);
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      
      if (response.success) { // Check if login is successful
        console.log("Login successful:", response);
        alert('Login Successful!!');
        routeChangeToHome(); // Redirect to home page
      } else {
        console.error('Login failed:', response.message); // Handle failed login
        alert('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src="../../public/logo.jpg" alt="Logo"  style={{ width: '200px', height: '150px',borderRadius:'50%',margin:'5px' }}/>
        <Typography component="h1" variant="h5">
          {t('button.signin')}
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            label="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <Stack direction="row" spacing={2} sx={{marginTop: 2}}>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            {t('button.signin')}
          </Button>
          <Button variant="contained" color='error' >
            Forgot password?
          </Button>
          <Button  variant="contained" color="success" onClick={handleReg}>
                {t('button.register')}
              </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
