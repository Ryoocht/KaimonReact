import React from "react";
import TitleLogin from "../../components/store/TitleLogin";
import StoreList from "../../components/store/StoreList";
import StoreSearch from "../../components/store/StoreSearch";
import AdminLink from "../../components/store/AdminLink";

const TopPage = () => {

    return (
        <div>
            <TitleLogin />
            <StoreSearch />
            <StoreList />
            <AdminLink />
        </div>
    )

}

export default TopPage;