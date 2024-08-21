import { CircularProgress, Container, List, ListItemButton } from "@mui/material";
import OpenIssueHeaderContainer from "./OpenIssueHeaderContainer";
import { Issue } from "../models/IssueModel";
import { useSelector } from "react-redux";
import { getIssueList } from "../store/Issue-Slice";



function IssueList() {
    const issuesList = useSelector(getIssueList());
    console.log("issuesList length: ", issuesList.length);

    return (
        <Container>
            {issuesList.length > 0 ? <List sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}>
                {issuesList.map((issue) => {
                    return (
                        <OpenIssueHeaderContainer key={issue._id} issueDetails={issue} />
                    );
                })}

            </List>
                :
                <center><h1>Please Wait ...</h1>
                    <CircularProgress /></center>}
        </Container>
    );
};

export default IssueList;