import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    postsList: [],
    
}

export const UserSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {        
        setPosts: (state, action) => {
            state.postsList = action.payload;  
            console.log(state.postsList) 
        },
    },
})

export const { setPosts } = UserSlice.actions

export default UserSlice.reducer