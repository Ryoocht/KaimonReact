import React from "react";
import "../../style/store/TopPage.css";
import { Link } from "@mui/material";
import adminImg from "../../img/Opened-pana.png";


const AdminLink = () => {

    return(
        <div className="admin-link-container">
            <div>
                <img className="partner-img" src={adminImg} alt="adminImg"></img>
                <p className="partner-title">Become a Partner</p>
            </div>
            <Link
                to={"admins"}
                component="button"
                variant="body2"
            >Sign up your store →</Link>
        </div>
    )
}

export default AdminLink;