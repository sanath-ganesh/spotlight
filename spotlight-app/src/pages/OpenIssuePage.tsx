import { Box, Container, Typography } from "@mui/material";
import OpenIssueHeaderContainer from "../components/OpenIssueHeaderContainer";
import AddNewCommentContainer from "../components/AddNewCommentContainer";
import Comments from "../components/Comments";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState} from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIssueByIssueId } from "../store/Issue-Slice";

function OpenIssuePage() {
    const location = useLocation();
    const issueId = location.state as string;
    const issue = useSelector(getIssueByIssueId(issueId));

    const [openAddNewContainer, setOpenAddNewContainer] = useState(false);

    const handleClickOpen = () => {
        setOpenAddNewContainer(true);
    };
    const handleClose = () => {
        setOpenAddNewContainer(false);
    };
    console.log(issue, "issue");

    return (
        <div style={{
            gridColumn: '2',
            gridRow: '2',
        }}>
            <Container disableGutters sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 10,
                padding: 0,
            }}>
                <OpenIssueHeaderContainer issueDetails={issue} />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '94%',
                    mt: 2,
                    ml: 5,
                }}>
                    <Typography variant="h5">Comments</Typography>
                    <Fab onClick={handleClickOpen} color="default" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Box>
                <Comments comments={issue?.issueComments} />
                <AddNewCommentContainer open={openAddNewContainer} handleClose={handleClose} />
            </Container>
        </div>
    );
}

export default OpenIssuePage;