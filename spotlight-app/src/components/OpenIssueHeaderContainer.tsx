import { Card, Typography, Box, ListItem, Chip, CardActionArea, Container, IconButton } from "@mui/material"; // Importing components from Material-UI
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined'; // Importing icon component from Material-UI
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined'; // Importing icon component from Material-UI
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom
import IssueLongMenu from "./IssueLongMenu"; // Importing custom component
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Importing icon component from Material-UI
import { useState } from "react"; // Importing useState hook from React
import { useDispatch } from "react-redux"; // Importing useDispatch hook from React Redux
import { fetchAllIssues } from "../services/issue-services"; // Importing fetchAllIssues function from issue services
import { fetchNPopulateIssuesListStore } from "../store/Issue-Slice"; // Importing fetchNPopulateIssuesListStore function from Issue-Slice
import { Issue } from "../models/IssueModel"; // Importing Issue model

// Define type for props
type Props = {
    issueDetails: Issue // Prop for issue details
}

// Component for displaying header of an open issue
function OpenIssueHeaderContainer(props: Props) {
    const navigate = useNavigate(); // Getting the navigate function from useNavigate hook
    // Function to handle route change to open issue page
    const routeChangeToOpenIssue = (issueId: string) => {
        let path = `../issue`; // Defining the path to the open issue page
        navigate(path, { replace: true , state: issueId}); // Navigating to the open issue page
    }
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // State for anchor element of long menu
    const openLongMenu = Boolean(anchorEl); // Boolean state to determine if long menu is open
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget); // Setting anchor element when long menu button is clicked
    };
    const handleMenuClose = () => {
        setAnchorEl(null); // Closing long menu
    };

    return (
        <Card id="Issue-card" sx={{ // Card component for issue header
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            width: '100%'
        }}>
            {/* Card action area for clickable area of the issue */}
            <CardActionArea onClick={() => routeChangeToOpenIssue(props.issueDetails._id)} sx={{ p: 3 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    {/* Title of the issue */}
                    <Typography variant="h4" color={"black"} gutterBottom>
                        {props.issueDetails.issueTitle}
                    </Typography>
                    <Box >
                        {/* Icon button for more options */}
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={openLongMenu ? 'long-menu' : undefined}
                            aria-expanded={openLongMenu ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={event => {
                                event.stopPropagation(); // Stopping event propagation
                                event.preventDefault(); // Preventing default behavior
                                handleClick(event); // Handling click event
                            }}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        {/* Long menu for more options */}
                        <IssueLongMenu anchorEl={anchorEl} open={openLongMenu} handleClick={handleClick} handleClose={handleMenuClose} />
                    </Box>
                </Box>
                {/* Description of the issue */}
                <Typography variant="body1">
                    {props.issueDetails.issueDescription}
                </Typography>
                <div id="issue-category-container">
                    <ListItem sx={{ gap: 2 }}>
                    {/* Chip components for displaying issue categories */}
                    {props.issueDetails.issueCategory.map((category) => {
                        return (
                            <Chip variant="outlined" color="default" label={category} />
                        );
                    })}
                    </ListItem>
                </div>
            </CardActionArea>
            <Box sx={{ // Box for displaying upvote and downvote count
                p: 2,
                pl: 3,
                width: '15%',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Box component="span" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    width: 40,
                    height: 40
                }}>
                    {/* Icon for upvote */}
                    <ArrowCircleUpOutlinedIcon sx={{
                        color: '#5badf5',
                        fontSize: 40
                    }} />
                    {/* Text for upvote count */}
                    <Typography color={"#5badf5"}>{props.issueDetails.issueInteractions.map((issueInteract) => issueInteract.isUpvoted == true).length}</Typography>
                </Box>
                <Box component="span" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    width: 40,
                    height: 40
                }}>
                    {/* Icon for downvote */}
                    <ArrowCircleDownOutlinedIcon sx={{
                        color: '#CF2129',
                        fontSize: 40
                    }} />
                    {/* Text for downvote count */}
                    <Typography color={"#CF2129"}>{props.issueDetails.issueInteractions.map((issueInteract) => issueInteract.isDownvoted == true).length}</Typography>
                </Box>
            </Box>
        </Card>
    );
}

export default OpenIssueHeaderContainer; // Exporting the component