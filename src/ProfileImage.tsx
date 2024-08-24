import React from 'react';
import profileImage from "./assets/MP.jpg";
import './App.css';


const ProfileImage: React.FC = () => {
  return (
    <div className="profile-image">
      <img src={profileImage} alt="Profile" />
    </div>
  );
};

export default ProfileImage;