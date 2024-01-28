import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    postsList: [],
    newPost:{}
    
}

export const UserSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {        
        getPosts: (state, action) => {
            state.postsList = action.payload;  
        },
        addPost: (state, action) => {
            state.newPost = action.payload;  
        },
    },
})

export const { getPosts ,addPost} = UserSlice.actions

export default UserSlice.reducer