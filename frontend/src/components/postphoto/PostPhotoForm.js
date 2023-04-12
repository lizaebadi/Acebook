import React, { useState } from 'react';
const path = require('path');

const fse = require('fs-extra');
const sharp = require('sharp');

// this is so that github does not delete the empty folder uploaded_photos
fse.ensureDirSync(path.join("frontend", "public", "uploaded_photos"))

const AddPhotoForm = ({ navigate }) => {
  if (req.file) {
    const photofilename = `${Date.now()}.jpeg`
    sharp(req.file.buffer).resize(844,456).jpeg({quality: 60}).toFile(path.join("frontend", "public", "uploaded_photos", photofilename))
    req.cleanData.photo = photofilename
  }

  const [token, setToken] = useState(window.localStorage.getItem("token"));

    if(token) {
      let response = fetch( '/add-photo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ message: message })
      })

      if(response.status !== 201) {
        console.log("oops")
        navigate('/add-photo')
      } else {
        console.log("yay")
        let data = response.json()
        window.localStorage.setItem("token", data.token)
        setToken(window.localStorage.getItem("token"))
        navigate('/posts');
      }
    }

  return (
    <form action="/upload" method="post" enctype="multipart/form-data">
      <label for="photo">Choose a photo:</label>
      <input type="file" id="photo" name="photo"/>
      <input type="submit" value="Upload"/>
    </form>
  );
};

export default AddPhotoForm;

