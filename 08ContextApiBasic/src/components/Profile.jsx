import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const Profile = () => {

    const {user}=useContext(UserContext);
    if(!user) return <h1>Not LoggedIn</h1>
    return (
        <>
            <h2>Profile Username:- {user.userName}  and  password : {user.password}</h2>
          
            <h6>More Components</h6>

        </>
    )
}

export default Profile;