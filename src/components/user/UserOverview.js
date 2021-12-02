import React from "react";

const UserOverview = props => {
    
    const userOverview = props.user.attributes

    return(
        <div>
            <p>{userOverview.username}</p>
            <p>{userOverview.first_name}</p>
            <p>{userOverview.last_name}</p>
            <p>{userOverview.email}</p>
            <p>{userOverview.phone_number}</p>
        </div>
    );
}

export default UserOverview;