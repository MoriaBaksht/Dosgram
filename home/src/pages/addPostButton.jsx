import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch ,useSelector} from 'react-redux';
// import { addPostAsync } from '../reducers/postReducer'; // יש לייבא את הפעולה האסינכרונית
import { addPost } from '../redux/reducers/postReducer';
export default function AddPostButton() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const user = useSelector(store => store.user.currentUser)

  const [post, setPost] = useState({
    date: new Date(),
    description: description,
    category: {id: categoryId, name: 'food', icon: null},
    images: imageName,
    user:user
  });

  const updateValues = (event) => {
    if(event.target.name===`images`){
      const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    const fileName =file.name;
    setPost({
      ...post,
      [event.target.name]: fileName
    })
    }
    else{
      setPost({
        ...post,
        [event.target.name]: event.target.value
      })
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_POST',
      payload: post,
    })
  };

  return (
    <>
      <span>categoryId:{categoryId}</span>
      <div>
        <h1>Image Uploader</h1>
        <form>
          <div>
            <label htmlFor="description"></label>
            <TextField
              label="description"
              color="secondary"
              focused
              type="text"
              // value={description}
              name="description"
              onChange={updateValues}
            />
          </div>
          <div>
            <label htmlFor="image">
              Upload Image
              <Fab color="secondary" size="medium" aria-label="add" component="span">
                <AddIcon />
              </Fab>
            </label>
            <input
              type="file"
              id="image"
              name="images"
              // accept="image/*"
              onChange={updateValues}
              style={{ display: 'none' }}
            />
          </div>
          {selectedImage && (
            <div>
              <h2>Selected Image:</h2>
              <img src={selectedImage} alt="Selected" style={{ width: '300px', height: 'auto' }} />
            </div>
          )}
          <Button color="secondary" type="submit" onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
      </div>
    </>
  );
}
