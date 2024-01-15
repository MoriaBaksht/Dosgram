import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import CommentShow from '../commentCard';
import { red } from '@mui/material/colors';
import DialogContent from '@mui/material/DialogContent';
import { TextField, Dialog, DialogActions, DialogContentText, DialogTitle } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';

const ExpandButton = styled(IconButton)(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledCard = styled(Card)({
  width: 450,
  marginBottom: 20,
  marginTop: 21,
});

const CommentsContainer = styled('div')({
  width: '100%',
  maxHeight: 200,
  overflowY: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const CardActionsContainer = styled(CardActions)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const AddCommentButton = styled(Button)({
  Padding: 3,
  marginTop: 10,
});

function PostCard({ post }) {
  const [openAddComment, setOpenAddComment] = React.useState(false);
  const [showComments, setShowComments] = React.useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const addComment = () => {
    setOpenAddComment(false);
    // שורות קוד שלך להוספת תגובה...
  };

  return (
    <>
      <StyledCard>
        <CardMedia component="img" height="320" image={post.images} />
        <CardActionsContainer sx={{ color: red }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          <div>{post.comments.length}</div>

          </IconButton>
          <Button style={{ Padding: 3 }} onClick={toggleComments}>
            <CommentIcon /> 
          </Button>
         
        </CardActionsContainer>
        {showComments && (
          <CommentsContainer>
            {post.comments.map((comment, index) => (
              <CommentShow key={index} comment={comment} />
            ))}
          </CommentsContainer>
        )}
        {showComments && (
          <AddCommentButton onClick={() => setOpenAddComment(true)}>
            Add Comment
          </AddCommentButton>
        )}
      </StyledCard>
      <Dialog open={openAddComment} onClose={() => setOpenAddComment(false)}>
        <DialogTitle>Add Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your comment:</DialogContentText>
          <TextField autoFocus margin="dense" id="comment" label="Comment" type="text" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddComment(false)}>Cancel</Button>
          <Button onClick={addComment}>Add Comment</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PostCard;
