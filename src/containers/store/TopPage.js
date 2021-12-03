import React from "react";
import TitleLogin from "../../components/store/TitleLogin";
import StoreList from "../../components/store/StoreList";
import AdminLink from "../../components/admin/AdminLink";
import Footer from "../Footer";

const TopPage = () => {

    return (
        <div>
            <TitleLogin />
            <StoreList />
            <AdminLink />
            <Footer />
        </div>
    );
}

export default TopPage;