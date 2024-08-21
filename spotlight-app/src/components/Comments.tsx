import { Card, Typography, Box, Avatar, Divider, IconButton, Fab } from "@mui/material";
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import SubComments from "./SubCommets";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentLongMenu from "./CommentLongMenu";
import AddNewCommentContainer from "./AddNewCommentContainer";
import AddIcon from '@mui/icons-material/Add';

/**
 * Component for rendering comments.
 * @param {Object} props - Props for Comments component.
 * @param {Comment[] | undefined} props.comments - Array of comments to render.
 * @returns {JSX.Element} - Rendered Comments component.
 */
function Comments(props: { comments: Comment[] | undefined }) {
    // State for anchor element of the long menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // Boolean state to determine if the long menu is open
    const openLongMenu = Boolean(anchorEl);
    
    // Function to handle opening the long menu
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    // Function to handle closing the long menu
    const handleCommentClose = () => {
        setAnchorEl(null);
    };
    
    // State for controlling the visibility of the add new comment container
    const [openAddNewContainer, setOpenAddNewContainer] = useState(false);
    
    // Function to handle opening the add new comment container
    const handleAddClickOpen = () => {
        setOpenAddNewContainer(true);
    };
    
    // Function to handle closing the add new comment container
    const handleAddClose = () => {
        setOpenAddNewContainer(false);
    };

    // Rendering comments
    return (
        <>
            {
                props.comments.map((comment, i) => {
                    return <Card key={i} sx={{
                        m: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        p: 3,
                        gap: 1,
                        borderRadius: 10,
                        backgroundColor: '#FFFFFF'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 4
                            }}>
                                <Avatar sx={{ width: 50, height: 50 }} />
                                <div>
                                    <Typography variant="h6" color={"black"}>
                                        {comment.userId}
                                    </Typography>
                                    <Typography variant="caption" color={"black"}>
                                        {comment.commentDate.toString()}
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                {/* Button to open the long menu */}
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={openLongMenu ? 'long-menu' : undefined}
                                    aria-expanded={openLongMenu ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                {/* Long menu for additional actions */}
                                <CommentLongMenu anchorEl={anchorEl} open={openLongMenu} handleClick={handleClick} handleClose={handleCommentClose} />
                            </div>
                        </Box>
                        <Typography variant="body1">
                            {comment.content}
                        </Typography>
                        <Box style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{
                                width: '15%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                {/* Upvote icon */}
                                <Box component="span" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    width: 40,
                                    height: 40
                                }}>
                                    <ArrowCircleUpOutlinedIcon sx={{
                                        color: '#5badf5',
                                        fontSize: 40
                                    }} />
                                    {/* Number of upvotes */}
                                    <Typography color={"#5badf5"}>{comment.commentInteractions.map((commentInteract) => commentInteract.isUpvoted == true).length}</Typography>
                                </Box>
                                {/* Downvote icon */}
                                <Box component="span" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    width: 40,
                                    height: 40
                                }}>
                                    <ArrowCircleDownOutlinedIcon sx={{
                                        color: '#CF2129',
                                        fontSize: 40
                                    }} />
                                    {/* Number of downvotes */}
                                    <Typography color={"#CF2129"}>{comment.commentInteractions.map((commentInteract) => commentInteract.isDownvoted == true).length}</Typography>
                                </Box>
                            </div>
                            {/* Button to add a new comment */}
                            <Fab onClick={handleAddClickOpen} color="default" aria-label="add" size="small" variant="extended">
                                <AddIcon />
                                Add
                            </Fab>
                            {/* Container for adding a new comment */}
                            <AddNewCommentContainer isSubComment={true} commentData={comment} open={openAddNewContainer} handleClose={handleAddClose} />
                        </Box>
                        <Divider />
                        {/* Render sub-comments */}
                        <SubComments Comments={comment.subComments} />
                    </Card>
                })
            }
        </>
    )
}

export default Comments;
