import { Avatar, Box, Typography, Divider, IconButton } from '@mui/material';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentLongMenu from './CommentLongMenu';
import { useState } from 'react';

type SubCommentsProps = {
    Comments: any;
}

function SubComments(props: SubCommentsProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openLongMenu = Boolean(anchorEl);
    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            {
                props.Comments.map((comment: any, index: number) => {
                    return (
                        <div key={index} style={{
                            marginLeft: 20,
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
                                    <Avatar sx={{ width: 30, height: 30 }} />
                                    <div>
                                        <Typography variant="h6" sx={{ fontSize: 15 }} color={"black"}>
                                            {comment.username}
                                        </Typography>
                                        <Typography variant="caption" color={"black"}>
                                            {comment.time}
                                        </Typography>
                                    </div>
                                </div>
                                <div>

                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={openLongMenu ? 'long-menu' : undefined}
                                        aria-expanded={openLongMenu ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleMenuClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <CommentLongMenu anchorEl={anchorEl} open={openLongMenu} handleClick={handleMenuClick} handleClose={handleMenuClose} />
                                </div>
                            </Box>
                            <Typography variant="body1">
                                {comment.comment}
                            </Typography>
                            <div style={{
                                width: '15%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: 10
                            }}>
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
                                    <Typography color={"#5badf5"}>{comment.upvotes}</Typography>
                                </Box>
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
                                    <Typography color={"#CF2129"}>{comment.downvotes}</Typography>
                                </Box>
                            </div>
                            <Divider />
                        </div>
                    )
                })
            }
        </>
    )
}

export default SubComments;