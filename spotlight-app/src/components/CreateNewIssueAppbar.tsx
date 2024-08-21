import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import myImage from "../assets/spotlight-logo.svg";
function CreateNewIssueAppBar() {

    return (
        <AppBar position="static" sx={{ backgroundColor: "#2b5d7fa8" }}>
            <Container maxWidth="xl" >
                    <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between', width: '100%' }}>
                        <img src={myImage} alt="My Image" width={50} height={50} />
                        <p style={{margin: 0, color: 'black', fontSize: 24, fontWeight: 600, padding: 0}}>Post an Issue</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
            </Container>
        </AppBar>
    );
}

export default CreateNewIssueAppBar;