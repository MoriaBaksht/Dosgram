import { CheckBox } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import PostCard from '../pages/postCard';
import Avatar from '@mui/material/Avatar';


function Posts() {
  const location = useLocation()

  const categoryId = location.state.id;
  const dispatch = useDispatch()
  const allPostsList = useSelector(store => store.post.postsList);
  
  console.log(`---#43, allPostsList:`);
  console.log(allPostsList);
  useEffect(() => {
    dispatch({ type: 'GET_POSTS' });
  }, []);

  return (
    <>
    <div></div>
      <div>
        {allPostsList.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </>
  )
}
export default Posts;