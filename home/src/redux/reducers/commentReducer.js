import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    commentsList: [],
    
}

export const CommentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {        
       
        getComments:(state, action) => {
            state.commentsList = (action.payload);
    },
    addCommentByPost: (state, action) => {
        state.commentsList.push(action.payload);
    },
}})


export const { addComment ,getComments,addCommentByPost} = CommentSlice.actions

export default CommentSlice.reducer