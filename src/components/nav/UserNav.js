import React from "react";
import ShoppingCart from "../../img/shopping-cart-svgrepo-com.svg";
import MenuBar from "../../img/bars-solid.svg";

const UserNav = () => {
    return(
        <div className="user-nav-container">
            <img src={MenuBar} className="menu-bar" alt="menu-bar"></img>
            <h1 className="brand-title">Kaimon</h1>
            <a className="user-loggedin-sign">RT</a>
            <a className="user-login-button">Log in</a>
            <p className="cart-quantity">1</p>
            <img src={ShoppingCart} className="cart-icon" alt="shopping-cart"></img>
            <hr className="user-nav-hr"/>
        </div>
    );
}

export default UserNav;