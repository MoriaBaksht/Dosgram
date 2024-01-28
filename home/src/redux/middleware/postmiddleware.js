import axios from 'axios';
import { getPosts, addPost } from '../reducers/postReducer';
// import { addPostAsync } from './path-to-add-post-async'; // שינוי חשוב כאן!

export const getPostsMidd = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type === 'GET_POSTS') {
    axios
      .get('http://localhost:8585/api/posts/all')
      .then((response) => {
        dispatch(getPosts(response.data));
      })
      .catch((error) => {
        console.error('Error fetching ads:', error);
      });
  } else if (action.type === 'GET_POSTS_BY_CATEGORY_ID') {
    axios
      .get(`http://localhost:8585/api/posts/byCategory/${action.payload.categoryId}`)
      .then((response) => {
        dispatch(getPosts(response.data));
      })
      .catch((error) => {
        console.error('Error fetching ads:', error);
      });
  } else if (action.type === 'ADD_POST') {
    axios
      .post('http://localhost:8585/api/posts/post', action.payload)
      .then((response) => {
        dispatch(addPost(response.data));
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }

  return next(action);
};
