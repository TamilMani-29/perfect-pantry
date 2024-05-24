import React from 'react'
import profileImg from '../assets/general-images/account.png'
const ProfileBar = () => {
  return (
    <div className="profile">
      <a href="/profile">
        <img
          className="profile-img"
          src={profileImg}
          alt="profile-option"
        />
      </a>
    </div>
  );
}

export default ProfileBar