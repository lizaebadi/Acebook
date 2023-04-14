import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import NavBar from '../navbar/NavBar';
import './Feed.css';
import { useNavigate } from 'react-router';
import CreatePostForm from '../createpost/CreatePostForm';

const Feed = ({ navigate }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if(token) {
      fetch("/posts", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"));
          setPosts(data.posts);
        })
    }
  }, [])

  async function createpost() {
    navigate('/createpost')
  }

  async function logout() {
    navigate('/');
  }

  if(token) {
    return (
      <>
      <NavBar navigate={ navigate } />
        <div className="feed-container">
        <CreatePostForm navigate={ navigate } />
        <h2 className="feed-heading">Posts</h2>
        <div id="feed" role="feed">
          {posts
            ?.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
            .map((post) => (
              <Post
                key={post._id}
                post={{
                  ...post,
                  photoUrl: post.photoUrl && `${post.photoUrl}`,
                }}
              />
            ))}
        </div>
        <div className="button-container">
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
          <button className="create-post-button" onClick={createpost}>
            Create Post
          </button>
        </div>
      </div>
      </>
    )
  } else {
    navigate('/');
  }
};

export default Feed;