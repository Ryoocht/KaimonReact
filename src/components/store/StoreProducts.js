import React from "react";
import BasketIcon from "../../img/shopping-basket-solid.svg"

const StoreProducts = props => {

    return(
        <div className="store-products">
            {props.products.map(product => (
                <div className="product-container" key={product.id}>
                    <img src={product.attributes.image} className="product-image" alt="product-img"></img>
                    <p className="product-name" >{product.attributes.name}</p>
                    <img src={BasketIcon} className="basket-icon" alt="basket"></img>
                    <p className="product-price">$ {product.attributes.price}</p>
                </div>
            ))}
        </div>
    );
}

export default StoreProducts;