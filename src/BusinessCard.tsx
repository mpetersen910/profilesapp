import React from 'react';
import ProfileImage from './ProfileImage';
import ContactInfo from './ContactInfo.tsx';
import SocialLinks from './SocialLinks';
import './App.css';

const BusinessCard: React.FC = () => {
  return (
    <div className="business-card">
      <ProfileImage />
      <ContactInfo />
      <SocialLinks />
    </div>
  );
};

export default BusinessCard;