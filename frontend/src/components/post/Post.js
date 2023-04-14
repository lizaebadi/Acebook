import React from "react";
import LikeButton from "../likeButton/LikeButton";
import './Post.css';


const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  return `${formattedDate} - ${formattedTime}`;
};

const Post = ({ post }) => {
  const formattedDate = formatDate(post.dateCreated);
  console.log(post)
  return (
    <article className="post-box" data-cy="post" key={post._id}>
      <p id="message">{post.message} </p>
      <p id="date">{formattedDate}</p>
      <LikeButton post_like={post.likes} post_id={post._id} />
      {post.photoUrl && <img src={post.photoUrl} alt="post" />}
    </article>
  );
};

export default Post;