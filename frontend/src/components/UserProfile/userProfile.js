import React, { useEffect, useState } from 'react';
import RecentPosts from '../RecentPosts/RecentPosts';
import UserInfo from '../UserInfo/UserInfo';
import NavBar from '../navbar/NavBar';
import { useNavigate } from 'react-router';
import './UserProfile.css';

const UserProfile = ({ navigate }) => {
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

  const handleSubmit = (e, name, email, avatar) => {
    e.preventDefault();

    fetch('/users/update', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        email: email,
        avatarUrl: avatar
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.message === 'OK') {
        setUser({
          ...user,
          name: name,
          email: email,
          avatar: avatar
        })
      }
    })
    e.target.reset();
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

  if(token) {
    return (
      <>
      <NavBar navigate={ navigate } />
      <div className='profile-container'>
        <UserInfo user={user} handleSubmit={handleSubmit} />
        <RecentPosts posts={posts} />
      </div>
      </>
    )
  } else {
    navigate('/login')
  }
};

export default UserProfile;