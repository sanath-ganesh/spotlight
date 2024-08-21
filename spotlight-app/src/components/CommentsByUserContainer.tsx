import React from 'react';
import UserCommentCard from './UserCommentCard';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

/**
 * Component for rendering a container displaying comments made by a user.
 * @returns {JSX.Element} - Rendered CommentsByUserContainer component.
 */
function CommentsByUserContainer() {
    return (
        <>
        <React.Fragment>
                <CssBaseline />
                {/* Container for the entire component */}
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
                        {/* App bar to display the title and a button */}
                        <AppBar position="static" sx={{backgroundColor: 'black' ,borderRadius: '1em 1em 1em 1em'}}>
                            <Toolbar>
                                {/* Title of the container */}
                                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                                    Comments Made By User
                                </Typography>
                                {/* Button to show all comments */}
                                <Button color="inherit">Show All</Button>
                            </Toolbar>
                        </AppBar>
                        {/* Container for displaying user comment cards */}
                        <Container sx={{display: 'flex', gap: '1em', justifyContent: 'space-evenly', alignItems: 'center', margin: '1em'}}>
                            {/* User comment card components */}
                            <UserCommentCard />
                            <UserCommentCard />
                            <UserCommentCard />
                        </Container>
                    </Box>
                </Container>
            </React.Fragment>
        </>
    )
}

export default CommentsByUserContainer;
