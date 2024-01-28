import React, { useState } from 'react';
import axios from 'axios';

export default function GetImageFromServer() {
  const [imageData, setImageData] = useState('');

  const getImage = (url) => {
    axios
      .get(url)
      .then((response) => {
        // Set the base64 string to imageData state
        setImageData(`data:image/jpeg;base64,${response.data}`);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  };

  return (
    <div className="img">
      {imageData && <img src={imageData} alt="" />}
    </div>
  );
}
