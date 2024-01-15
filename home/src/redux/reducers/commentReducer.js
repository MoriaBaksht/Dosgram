import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    commentsList: [],
    
}

export const CommentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {        
        addComment: (state, action) => {
            state.commentsList.push(action.payload) 
        },
        getComments:(state, action) => {
            state.commentsList = (action.payload);
    },
}})


export const { addComment ,getComments} = CommentSlice.actions

export default CommentSlice.reducer