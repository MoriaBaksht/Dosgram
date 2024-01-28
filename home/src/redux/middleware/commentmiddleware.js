import axios from 'axios';
import { addComment,getComments,addCommentByPost } from '../reducers/commentReducer';


export const postCommentMidd = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_COMMENTS_BY_POST') {
        axios.get("http://localhost:8585/api/comments/comments/1", action.payload)
            .then((response) => {
                if (response.status == 200)
                    dispatch(getComments(response.data));
            })
            .catch((error) => {
                console.error(error);
            });
    }

    else if (action.type === 'ADD_COMMENT_BY_POST') {
        axios.post(`http://localhost:8585/api/posts/post/${action.payload.postId}/comment`, action.payload.content)
            .then((response) => {
                    dispatch(addCommentByPost(response.data));
            })
            .catch((error) => {
                console.error(error);
            });    
    }
    return next(action);
};
