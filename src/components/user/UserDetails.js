import React, { useEffect, useState } from "react";
import UserOverview from "./UserOverview";
import UserAddress from "./UserAddress";
import UserPayMethod from "./UserPayMethod";

const api_url = 'http://localhost:3001/api/v1/user/users/1';

const UserDetails = () => {

    const [ userInfo, setUserInfo ] = useState([]);

    useEffect(() => {
        fetch(api_url)
        .then(resp => resp.json())
        .then(userData => {
            console.log(userData)
            setUserInfo([userData])})
        .then(error => console.log(error));
    }, []);

    if (userInfo.length !== 0) {
        return (
            <div>
                <UserOverview user={userInfo[0].data}/>
                <UserAddress address={userInfo[0].included[0]}/>
                <UserPayMethod />
            </div>
        );
    } else {
        return null;
    }
}

export default UserDetails;