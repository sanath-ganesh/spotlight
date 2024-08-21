import { Stack, Chip } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Box, Container } from '@mui/system';
import IssueList from '../components/IssueList';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIssueByIssueId } from '../store/Issue-Slice';

function HomePage() {

    const issueById = useSelector(getIssueByIssueId("66270bd7c013bf87ffc76e2e"));
    console.log("Issue fetched by issueId: ", issueById);

    const styles = theme => ({
        textField: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingBottom: 0,
            marginTop: 0,
            fontWeight: 500
        },
        input: {
            color: 'white'
        }
    });

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleDrawerOpen = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);


    return (
        <>
            {/* <Navbar handleDrawerOpen={handleDrawerOpen} /> {/* Navbar with handler */}
            {/* <Sidebar open={isDrawerOpen} handleDrawerClose={handleDrawerClose} /> Sidebar with state and handler */}
            <Container sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gridColumn: '2',
                gridRow: '2',
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: '1em'
                }}>
                    <TextField
                        type="search"
                        label="Search ..."
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            sx: {
                                borderRadius: 10,
                                flex: 1,
                            }
                        }}
                    />
                </div>
                <Stack direction="row" spacing={20}>
                    <Chip variant="outlined" color="success" label='Category1' onClick={handleClick} />
                    <Chip variant="outlined" color="warning" label='Category2' onClick={handleClick} />
                    <Chip variant="outlined" color="primary" label='Category3' onClick={handleClick} />
                    <Chip variant="outlined" color="secondary" label='Category4' onClick={handleClick} />
                    <Chip variant="outlined" color="error" label='Category5' onClick={handleClick} />
                </Stack>
                <Box sx={{ marginTop: '20px', width: "100%" }}>
                    <IssueList />
                </Box>
            </Container>
        </>
    );
};

export default HomePage;