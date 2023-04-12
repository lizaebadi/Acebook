import React, { useState } from 'react';
import axios from 'axios';

const CreatePostForm = ({ navigate }) => {

  const [message, setMessage] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // added another IF here because I am getting a 401 error (missing token)
    if(token) {
      const formData = new FormData();
      formData.append('photo', image);

      axios.post('http://localhost:3000/posts', formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }

    if(token) {
      let response = await fetch( '/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ message: message })
      })

      if(response.status !== 201) {
        console.log("oops")
        navigate('/posts')
      } else {
        console.log("yay")
        let data = await response.json()
        window.localStorage.setItem("token", data.token)
        setToken(window.localStorage.getItem("token"))
        navigate('/posts'); // new post functionality to post here.
      }
    }
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const handlePhoto = (event) => {
    setImage(event.target.files[0]);
    console.log(image)
  }

  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
      <input placeholder="Message" id="message" type='text' value={ message } onChange={handleMessageChange} />
      <input id="photo" accept= ".png, .jpg, .jpeg" type='file' onChange={handlePhoto} />
      <input id='submit' type="submit" value="Submit" />
    </form>
  );
};

export default CreatePostForm;