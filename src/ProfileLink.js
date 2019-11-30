import React from 'react';


function ProfileLink(props) {

  
  return (
    
  <button 
  onClick={props.onSimpleClick}
  style ={{backgroundColor:"blue"}}>
  {props.children}
  </button>
)
}

export default ProfileLink;