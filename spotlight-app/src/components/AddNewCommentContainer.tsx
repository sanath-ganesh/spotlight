import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import * as CommentServices from '../services/comment-services';
import { Comment } from '../models/CommentModel';
import SubComments from './SubCommets';

// Styled dialog component using MUI's styled API
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width: '50em',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// Define the props type for the AddNewCommentContainer component
type Props = {
  open: boolean; // Indicates whether the dialog is open
  handleClose: () => void; // Function to handle dialog close
  commentData: Comment; // Data of the parent comment
  isSubComment: boolean; // Indicates whether it's a sub comment
};

// Component for adding a new comment
const AddNewCommentContainer = (props: Props) => {
<<<<<<< HEAD
  // Function to handle adding a new comment
  const handleAddComment = () => {
    // Get the content of the new comment from the input field
    const content = document.getElementById('comment-content')?.nodeValue;
    if (!content) {
      return;
    }
    
    // Create a new comment object
=======
  const [commentContent, setCommentContent] = React.useState('');
  const handleChange = (txt: string) => {
    setCommentContent(txt);
  };  

  const handleAddComment = () => {
>>>>>>> f2437b0 (final commit)
    const newComment : Comment = {
      _id: 'CommentId',
      commentId: 110,
      userId: 'UserName',
      commentDate: new Date().toString(),
      content: commentContent,
      subComments: [],
      commentInteractions: []
    };
    
    // Call the service to add the new comment
    CommentServices.addComment(newComment);
<<<<<<< HEAD
    
    // Retrieve the newly added comment by its ID
    CommentServices.getCommentByCommentId(props.commentData._id).then((comment) => {
      console.log("comment: " + comment);
    });
    
    // Close the dialog
=======
>>>>>>> f2437b0 (final commit)
    props.handleClose();
  }

  return (
    <React.Fragment>
      {/* Dialog for adding a new comment */}
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        {/* Dialog title */}
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add New Comment
        </DialogTitle>
        {/* Close button */}
        <IconButton
          aria-label="close"
          onClick={props.handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {/* Dialog content */}
        <DialogContent dividers>
          <TextField
            id="comment-content"
            label="Comment Content"
            multiline
            rows={10}
            sx={{ width: '73%' }}
            onChange={(e) => handleChange(e.target.value)}
          />
        </DialogContent>
        {/* Dialog actions */}
        <DialogActions>
          <Button autoFocus onClick={handleAddComment}>
            Add Comment
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default AddNewCommentContainer;