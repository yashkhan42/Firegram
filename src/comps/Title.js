import React from 'react';
import ProfilePic from '../comps/ProfilePic';

const Title = () => {
  return (
    <div className="title">
      <h1>FireGram</h1>
      <ProfilePic />
      <h2>Your Pictures</h2>
      <p>Create your own photo gallery here!</p>
    </div>
  )
}

export default Title;