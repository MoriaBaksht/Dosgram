
import React from "react";
import axios from "axios";
import GetImageFromServer from "./GetImageFromServer";


const FileUpload = () => {

  const handleFileUpload = (event) => {
    // get the selected file from the input
    const file = event.target.files[0];
    // create a new FormData object
    const formData = new FormData();

    // append the file to the FormData object
    formData.append("file", file);

    // append additional fields (object) to the FormData object
    const objectToSend = {
      key1: "value1",
      key2: "value2",
    };

    // Convert the object to a JSON string and append it to FormData
    formData.append("object", JSON.stringify(objectToSend));

    // make a POST request to the File Upload API with the FormData object and Rapid API headers
    axios
      .post("http://localhost:3001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-rapidapi-host": "file-upload8.p.rapidapi.com",
          "x-rapidapi-key": "your-rapidapi-key-here",
        },
      })
      .then((response) => {
        // handle the response
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };

  // render a simple input element with an onChange event listener that calls the handleFileUpload function
  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <GetImageFromServer></GetImageFromServer>
    </div>
  );
};

export default FileUpload;
