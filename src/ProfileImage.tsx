import React from 'react';
import profileImage from "./assets/MP.jpg";

const ProfileImage: React.FC = () => {
  return (
    <div className="profile-image">
      <img src={profileImage} alt="Profile" />
    </div>
  );
};

export default ProfileImage;