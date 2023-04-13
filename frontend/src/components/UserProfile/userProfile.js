import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import UserDetails from '../userDetails/userDetails';

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (token) {
      fetch('/users/profile', {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        console.log(user);
      })
    }
    if (token) {
      fetch("/posts", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(async data => {
        window.localStorage.setItem("token", data.token)
        setToken(window.localStorage.getItem("token"))
        setPosts(data.posts);
        console.log(posts);
      })
    }
  }, [token]);

  return (
    <div className='profile-container'>
      <h1>Profile Page</h1>
      <div className='user-info'>
        <h2>Email Address</h2>
        <p> {user.email} </p>
        <h2>Name</h2>
        <p> {user.name} </p>
        <img src={user.avatar} />
      </div>
      <div className='own-posts'>
        <h1>Recent Posts</h1>
        <div id='feed' role="feed">
          {posts?.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
          .slice(0,5)
          .map((post) => (<Post post={post} key={post._id} />))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;