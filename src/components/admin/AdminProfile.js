import React from "react";

const AdminProfile = props => {

    const profile = props.profile;
    
    return (
        <div>
            <p>{profile.username}</p>
            <p>{profile.last_name}</p>
            <p>{profile.first_name}</p>
            <p>{profile.email}</p>
            <p>{profile.phone_number}</p>
        </div>
    );
}

export default AdminProfile;