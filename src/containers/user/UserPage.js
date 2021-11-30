import React from "react";
import UserLogout from "../../components/user/UserLogout";
import UserMenu from "../../components/user/UserMenu";
import UserDetails from "../../components/user/UserDetails";

const UserPage = () => {

    return(
        <div>
            <UserLogout />
            <UserMenu />
            <UserDetails />
        </div>
    );
}

export default UserPage;