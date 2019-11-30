import React from 'react';
import './App.css';

import Profile from './Profile';
import profileImg from './profile.png';


function App() {
  const profile = {

    photo: profileImg,

    Name: { firstName: 'Maher', lastName: 'Ghali' },

    profileLink: "https://www.facebook.com/"
  }


  return (
    <div className="App">
      <img src={profile.photo} />
      <h1 >{profile.Name.firstName} {profile.Name.lastName}</h1>
      <br />
      {
        (profile.profileLink != "") &&
        <button style={{ backgroundColor: "blue" }} onClick={() => { window.location = profile.profileLink }} >My facebook</button>    
      }
       </div>
  );

}

export default App;