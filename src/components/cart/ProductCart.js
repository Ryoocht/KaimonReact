import React from "react";
import DeleteIcon from "../../img/times-circle-regular.svg";
import Button from '@mui/material/Button';

const ProductCart = () => {
    return(
        <div className="cart-container">
            <p className="number-of-items">You have 1 item in your cart</p>
            <div className="cart-items-container">
                <div className="item-container">
                    <img src={DeleteIcon} className="delete-icon" alt="delete"></img>
                    <div className="cart-cart-left">
                        <img className="cart-product-img"></img>
                    </div>
                    <div className="cart-cart-right">
                        <p className="cart-product-title">Matcha Vanilla Soft 6pc 450ml</p>
                        <p className="cart-qty">QTY: 1</p>
                        <p className="cart-price">$11.90</p>
                    </div>
                </div>
            </div>
            <hr className="cart-hr"/>
            <div className="subtotal-container">
                <h3 className="subtotal-title">Subtotal</h3>
                <p className="subtotal-result">$35.70</p>
            </div>
            <Button variant="contained" color="success">
                Proceed to Checkout
            </Button>
        </div>
    );
}

export default ProductCart;