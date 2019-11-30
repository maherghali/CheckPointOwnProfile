
import React from 'react';
import Photo from './Photo';
import ProfileLink from './ProfileLink';


class Profile extends React.Component {

render(){
   return (
        <>
        <Photo src={this.props.profiles.photo} />
        <br/>

        <ProfileLink
            onSimpleClick={() => { window.location = "https:\\fb.com" }}
        > My Facebook </ProfileLink>
        </>
    )
}
 
}

export default Profile;