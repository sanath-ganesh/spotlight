import { useState } from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';

function PasswordRecovery () {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    alert("Recovery Email Sent To: "+ email);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Password Recovery
        </Typography>
        <Box component="form" onSubmit={handleRecovery} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleRecovery}
          >
            Send Recovery Email
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default PasswordRecovery;
