import React from 'react';
// import './userDetails.css';

const UserDetails = ({user}) => {
  return(
    <article className="info-box" data-cy="userDetails" key={ user._id }>
      {/* <p id="message">{ user.avatarUrl } </p> */}
      <p id="message">{ user.name } </p>
      <p id="message">{ user.email } </p>
    </article>
  )
}

export default UserDetails;
