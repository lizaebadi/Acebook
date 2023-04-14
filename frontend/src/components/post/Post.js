import React from 'react';

const Post = ({ post }) => {
  return (
    <article data-cy="post" key={post._id}>
      {post.message}
      {post.photoUrl && <img src={post.photoUrl} alt="post" />}
    </article>
  );
};

export default Post;

// import React from 'react';

// const Post = ({ post }) => {
//   return (
//     <article data-cy="post" key={post._id}>
//       {post.message && <p>{post.message}</p>}
//       {post.photoUrl && <img src={post.photoUrl} alt="post" />}
//     </article>
//   );
// };

// export default Post;

