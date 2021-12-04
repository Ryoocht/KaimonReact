import React from "react";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";

const StoreProducts = props => {

    return(
        <div>
            <h3 className="product-list-title">Popular Items</h3>
            <div className="store-products">
                {props.products.map(product => (
                    <div className="product-container" key={product.id}>
                        <Link to={"/store/" + props.storeId + "/product/" + product.id} key={product.id}>
                            <img src={product.attributes.image} className="product-image" alt="product-img"></img>
                        </Link>
                        <p className="product-name" >{product.attributes.name}</p>
                        <IconButton className="basket-icon" color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
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