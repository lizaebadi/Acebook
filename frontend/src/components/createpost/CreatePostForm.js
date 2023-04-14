import React, { useState } from 'react';
import Axios from 'axios';

const CreatePostForm = ({ navigate }) => {

  const [message, setMessage] = useState("");
  const [token] = useState(window.localStorage.getItem("token"));
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("message:", message);
    console.log("image:", image);

    if(token) {
      const formData = new FormData();
      formData.append('message', message);
      formData.append('image', image);

      Axios.post('http://localhost:3000/posts', formData, { 
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'          
        },
      })
        .then(res => {
          console.log(res);
          //console.log("This is the form data - ", formData);
          //console.log(image)
          navigate('/posts')
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const handleReload = () => {
    window.location.reload();
  };

  const handlePhoto = (event) => {
    setImage(event.target.files[0]);
  }

  return (
    <>
      <div className="add-message-form">
        <form onSubmit={handleSubmit} enctype='multipart/form-data'>
          <input placeholder="Message" id="message" type='text' value={ message } onChange={handleMessageChange} />
          <input id="image" name="image" accept= ".png, .jpg, .jpeg" type='file' onChange={handlePhoto} />
          <button id='submit' type="submit" value="Submit" onClick={ handleReload }>ADD POST</button>
        </form>
      </div>
    </>
  );
};

export default CreatePostForm;