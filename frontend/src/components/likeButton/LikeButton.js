import React, { useState } from "react";

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
    });
  };
  
  return <button className ="like-button"  onClick={handleClick}>Likes ({count})</button>;
};

export default LikeButton;
