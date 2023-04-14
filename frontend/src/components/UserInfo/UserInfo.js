import React, { useState } from 'react';

const UserInfo = ({ user, handleSubmit }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar);


  return (
    <div className='user-info'>
      <h2>User ID</h2>
      <p> {user.userId} </p>
      <form onSubmit={(e) => handleSubmit(e, name, email, avatar)}>
        <h2>Name</h2>
        <p>{user.name}</p>
        <input type='text' placeholder="Update Name Here..." value={name} onChange={(e) => setName(e.target.value)} />
        <h2>Email Address</h2>
        <p>{user.email}</p>
        <input type='text' placeholder="Update Email Here..." value={email} onChange={(e) => setEmail(e.target.value)} />
        <h2>Avatar URL</h2>
        <div className='pp-container'>
          <img src={user.avatar} alt='profile'/>
        </div>
        <input type='text' placeholder="Upload new profile photo.." value={avatar} onChange={(e) => setAvatar(e.target.value)} />
        <button type='submit'>Update</button>
      </form>
    </div>
  );
};

export default UserInfo;