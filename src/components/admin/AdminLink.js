import React from "react";
import "../../style/store/TopPage.css";
import { Link } from "react-router-dom";
import AdminImg from "../../img/Opened-pana.svg";
import AboutMeImg from "../../img/About us page-pana.svg";


const AdminLink = () => {

    return(
        <div className="links-container">
            <div className="links">
                <img className="partner-img" src={AdminImg} alt="adminImg"></img>
                <p className="link-title">Become a Partner</p>
                <Link to={"/admin"} className="link-text">Sign up your store →</Link>
            </div>
            <div className="links">
                <img className="partner-img" src={AboutMeImg} alt="adminImg"></img>
                <p className="link-title">About Us</p>
                <Link to={"/aboutus"} className="link-text">Check about us →</Link>
            </div>
        </div>
    );
}

export default AdminLink;