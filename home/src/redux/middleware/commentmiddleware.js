import axios from 'axios';

import { addComment,getComments } from '../reducers/commentReducer';

export const postCommentMidd = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_COMMENT') {
        const newComment=action.payload;
        console.log("newComment",newComment)
        axios.post('http://localhost:8585/api/comments/post', action.payload)
            .then((response) => {
                console.log('response.data', response.data);
                    dispatch(addComment(response.data));
            })
            .catch((error) => {
                console.error(error);

            });
    }
    // else if (action.type === 'GET_COMMENTS_BY_POST') {
    //     // Perform the asynchronous operation
    //     axios.get('http://localhost:8585/api/comments/all', action.payload)
    //         .then((response) => {
    //             console.log('response.data', response.data);
    //             if (response.status == 200)
    //                 dispatch(getComments(response.data));
    //             else if (response.status == 201) {
    //                 //מייל קיים סיסמא לא
    //             }
    //         })
    //         .catch((error) => {
    //             console.error(error);

    //         });
    // }
    else if (action.type === 'GET_COMMENTS_BY_POST') {
        // Perform the asynchronous operation
        //http://localhost:8585/api/comments/comments/{{postId}}
        axios.get("http://localhost:8585/api/comments/comments/1", action.payload)
            .then((response) => {
                console.log('response.data', response.data);
                if (response.status == 200)
                    dispatch(getComments(response.data));
                // else if (response.status == 201) {
                    //מייל קיים סיסמא לא
                // }
            })
            .catch((error) => {
                console.error(error);

            });
    }
    return next(action);
};