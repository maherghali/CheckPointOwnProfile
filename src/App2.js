import React from 'react';
import './App.css';

import Profile from './Profile';

import profileImg from './profile.png';

function App2() {
 const profile= {
   
  photo:profileImg,

	Name:{firstName:'', lastName:''},

	profileLink:''   
 }
  return (
    <div className="App">
      <Profile profiles={{profile}}/>
    </div>
  );
}

export default App2;
