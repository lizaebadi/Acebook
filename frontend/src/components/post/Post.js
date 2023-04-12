import React from "react";
import LikeButton from "../likeButton/LikeButton";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  return `${formattedDate} - ${formattedTime}`;
};

const Post = ({ post }) => {
  const formattedDate = formatDate(post.dateCreated);
  console.log(post);
  return (
    <article data-cy="post" key={post._id}>
      <p id="message">{post.message} </p>
      <p id="date">{formattedDate}</p>
      <LikeButton post_like={post.likes} post_id={post._id} />
    </article>
  );
};

export default Post;
