import React from "react";
import LogoBack from "../../img/logo-back.webp"
import TopImage from "../../img/Online Groceries-amico.svg";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import StoreSearch from "./StoreSearch";

const TitleLogin = () => {
    return(
        <div>
            <div className="top-title-container">
                <div className="top-title-left">
                    <div className="kaimon-logo">
                        <div className="wrapper"></div>
                        <Typography variant="h1" className="kaimon-text">Kaimon</Typography>
                        <img className="logo-back" src={LogoBack} alt="logo-back"></img>
                        <Typography variant="h1" className="kaimon-text-top">Kaimon</Typography>
                    </div>
                    <div className="catch-copy">
                        <p className="catch-copy-font">All Local Grocery stores and Suppliers for you</p>
                    </div>
                    <div className="store-search-container">
                        <StoreSearch />
                    </div>
                </div>
                <div className="top-title-right">
                    <div className="top-logins">
                        <Stack direction="row" spacing={6} className="login-stack">
                            <Button variant="outlined">Log in</Button>
                            <Button variant="contained">Sign up</Button>
                        </Stack>
                    </div>
                    <img className="top-img" src={TopImage} alt="top-img"></img>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default TitleLogin;