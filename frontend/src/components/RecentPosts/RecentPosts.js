import React from 'react';
import Post from '../post/Post';

const RecentPosts = ({ posts }) => {
  return (
    <div className='own-posts'>
      <h1>Recent Posts</h1>
      <div id='feed' role="feed">
        {posts?.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
        .slice(0,5)
        .map((post) => (<Post post={post} key={post._id} />))}
      </div>
    </div>
  )
};

export default RecentPosts;