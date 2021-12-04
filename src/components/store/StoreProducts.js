import React from "react";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BasketIcon from "../../img/shopping-basket-solid.svg"

const StoreProducts = props => {

    return(
        <div>
            <h3 className="product-list-title">Popular Items</h3>
            <div className="store-products">
                {props.products.map(product => (
                    <div className="product-container" key={product.id}>
                        <img src={product.attributes.image} className="product-image" alt="product-img"></img>
                        <p className="product-name" >{product.attributes.name}</p>
                        <IconButton className="basket-icon" color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                        {/* <img src={BasketIcon} className="basket-icon" alt="basket"></img> */}
                        <p className="product-price">$ {product.attributes.price}</p>
                        <div className="quantity">
                            Qty:
                            <input type="number" value="1" className="qty-input" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StoreProducts;