import React from "react";
import "../../style/store/TopPage.css";
import TitleLogin from "../../components/store/TitleLogin";
import StoreList from "../../components/store/StoreList";
import AdminLink from "../../components/admin/AdminLink";
import Footer from "../Footer";

const TopPage = () => {

    return (
        <div>
            <TitleLogin />
            <div className="top-page-background">
                <StoreList />
                <AdminLink />
                <Footer />
            </div>
        </div>
    );
}

export default TopPage;