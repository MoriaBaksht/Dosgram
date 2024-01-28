import { CheckBox } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import PostCard from '../pages/postCard';
import PostButton from '../pages/postsButton'

function Posts() {

  const location = useLocation();
  const categoryId = location.state.id;
  const dispatch = useDispatch();
  const allPostsList = useSelector(store => store.post.postsList);

  const [shouldDisplayPostButton, setShouldDisplayPostButton] = useState(true);  // הגדר משתנה לקריאה דינמית באופן תלת ממדי
  
  useEffect(() => {
    dispatch({
      type: 'GET_POSTS_BY_CATEGORY_ID',
      payload: { categoryId }
    });

  }, []);

  return (
    <>

      {shouldDisplayPostButton && <PostButton/>}

      <div>
        {allPostsList.map((post, index) => (
          <PostCard key={index} post={post}  />
        ))}
      </div>
      {allPostsList == null && <PostButton />}
    </>
  )
}
export default Posts;