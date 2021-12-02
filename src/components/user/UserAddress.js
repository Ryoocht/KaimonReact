import React from "react";

const UserAddress = props => {

    const userOverview = props.address.attributes

    return(
        <div>
            <p>{userOverview.street}</p>
            <p>{userOverview.suburb}</p>
            <p>{userOverview.state_id}</p>
            <p>{userOverview.post_code}</p>
        </div>
    );
}

export default UserAddress;