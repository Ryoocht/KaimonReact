import React from "react";
import TitleLogin from "../../components/store/TitleLogin";
import StoreList from "../../components/store/StoreList";
import AdminLink from "../../components/admin/AdminLink";

const TopPage = () => {

    return (
        <div>
            <TitleLogin />
            <StoreList />
            <AdminLink />
        </div>
    )

}

export default TopPage;