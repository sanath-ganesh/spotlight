import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import Chip from '@mui/material/Chip';

function UserDetialsContainer() {
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: '1em',
                    width: "100%"
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: '#D9D9D9',
                        padding: '1rem',
                        borderRadius: '1rem',
                        width: '50%'
                    }}>
                        <Avatar sx={{
                            width: '3em',
                            height: '3em',
                            bgcolor: deepOrange[500]
                        }}>
                            J
                        </Avatar>
                        <Typography variant="h6" gutterBottom>
                            John_Doe_90
                        </Typography>
                        <Chip color='success' avatar={<LocalPoliceIcon sx={{ color: deepPurple[500], width: '1rem' }} />} label="Authority/Normal" />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: '#D9D9D9',
                        padding: '1rem',
                        borderRadius: '1rem',
                        width: '100%'
                    }}>
                        <div style={{
                            width: '50%',
                            display: 'flex',
                            justifyContent: "space-between",
                            alignItems: 'center',
                        }}>
                            <h3>Full Name :</h3>
                            <p>John Doe</p>
                        </div>
                        <div style={{
                            width: '50%',
                            display: 'flex',
                            justifyContent: "space-between",
                            alignItems: 'center'
                        }}>
                            <h3>Email Id :</h3>
                            <p>John_Doe@gmail.com</p>
                        </div>
                        <div style={{
                            width: '50%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <h3>Phone No. :</h3>
                            <p>+1 345-345-3455</p>
                        </div>
                    </Box>
                </Container>
            </React.Fragment>
        </>
    );
}

export default UserDetialsContainer;