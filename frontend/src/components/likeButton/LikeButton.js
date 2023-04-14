import React, { useState } from "react";
import "./LikeButton.css"; 
import {FiHeart} from "react-icons/fi"

const LikeButton = (props) => {
  const [count, setCount] = useState(props.post_like ?? 0);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  console.log(props)

  const handleClick = () => {
    setCount(count + 1);
    fetch("/posts/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ post_id: props.post_id}),
    }).then(response => {
     return response.json()
    }).then(data => {
      setToken(data.token)
    });
  };
  
  return (
    <div className = "like-button-container" onClick={handleClick}>
      <FiHeart className ="like-button"  />
      <span className="like">Likes:{count}</span>
    </div>
  )
};

export default LikeButton;
