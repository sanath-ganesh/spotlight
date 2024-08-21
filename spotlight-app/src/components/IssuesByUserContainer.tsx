import React from 'react';
import UserIssueCard from './UserIssueCard'; // Importing the UserIssueCard component
import CssBaseline from '@mui/material/CssBaseline'; // Importing components from Material-UI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// Component for displaying issues by a user
function IssuesByUserContainer() {
    return (
        <>
            {/* Wrapping the content with React.Fragment */}
            <React.Fragment>
                <CssBaseline /> {/* Baseline styles for a consistent look and feel */}

                {/* Main container */}
                <Container sx={{ display: 'flex', justifyContent: 'space-around', gap: '1em', width: "100%" }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#D9D9D9',
                        borderRadius: '1rem',
                        width: '100%',
                        gap: '0.5rem',
                    }}>
                        {/* App bar for title and show all button */}
                        <AppBar position="static" sx={{backgroundColor: 'black' ,borderRadius: '1em 1em 1em 1em'}}>
                            <Toolbar>
                                {/* Title */}
                                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                                    Issues
                                </Typography>
                                {/* Button to show all issues */}
                                <Button color="inherit">Show All</Button>
                            </Toolbar>
                        </AppBar>

                        {/* Container for user issue cards */}
                        <Container sx={{display: 'flex', gap: '1em', justifyContent: 'space-evenly', alignItems: 'center', margin: '1em'}}>
                            {/* Displaying user issue cards */}
                            <UserIssueCard />
                            <UserIssueCard />
                            <UserIssueCard />
                        </Container>
                    </Box>
                </Container>
            </React.Fragment>
        </>
    );
}

export default IssuesByUserContainer;