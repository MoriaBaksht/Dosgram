import React, { useMemo,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import CommentShow from './commentCard';
import { red } from '@mui/material/colors';
import DialogContent from '@mui/material/DialogContent';
import { TextField, Dialog, DialogActions, DialogContentText, DialogTitle } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import PostButton from './postsButton';
import { useSelector } from 'react-redux';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { render } from 'react-dom';


const PageContainer = styled('div')({
  position: 'relative',
});

const PostButtonContainer = styled('div')({
  position: 'absolute',
  top: -250,
  right: 800,
});

const StyledCard = styled(Card)({
  width: 450,
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
  padding: 3,
  marginTop: 10,
});
function PostCard({ post }) {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [content, setContent] = React.useState({ content: '' })
  const updateValues = (event) => {
    setContent({
      ...content,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    setOpenAddComment(false);
    event.preventDefault();
    dispatch({
      type: 'ADD_COMMENT_BY_POST',
      payload: { content: content, postId: post.id }
    })
  }

  const [openAddComment, setOpenAddComment] = React.useState(false);
  const [showComments, setShowComments] = React.useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };


  return (
    <>
      <PageContainer style={{ padding: 30 }}> 

        <PostButtonContainer>
        </PostButtonContainer>
        <StyledCard>

  <CardHeader
    title={post.description}
    subheader={post.date}
    avatar={
      <Avatar aria-label="recipe">
        {post.user.profileImg} 
      </Avatar>
    }
  />

          <span style={{ margin: 5 }}> {post.user.firstName} {post.user.lastName}</span>
          <CardMedia component="img" height="320" src={`data:image/*;base64,${post.images}`} />
          <CardActionsContainer sx={{ color: red }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
              <div>{post.comments.length}</div>
            </IconButton>
            <Button style={{ padding: 3 }} onClick={toggleComments}>
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
        <form onSubmit={handleSubmit}>
          <Dialog open={openAddComment} onClose={() => setOpenAddComment(false)}>
            <DialogTitle>Add Comment</DialogTitle>
            <DialogContent>
              <DialogContentText>Enter your comment:</DialogContentText>
              <TextField onChange={updateValues} autoFocus margin="dense" name="content" type="text" fullWidth variant="standard" />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenAddComment(false)}>Cancel</Button>
              <Button onClick={(e) => handleSubmit(e)}>Add Comment</Button>
            </DialogActions>
          </Dialog>
        </form>
      </PageContainer>

    </>
  );

}

export default PostCard;
