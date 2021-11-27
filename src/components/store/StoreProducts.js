import React, { useEffect, useState } from "react";

const api_url = "http://localhost:3001/api/v1/stores/"

const StoreProducts = () => {

    const [ storeItems, setStoreItems ] = useState([])

    useEffect(() => {
        fetch(`${api_url}1`)
        .then(resp => resp.json())
        .then(data => setStoreItems([data]))
        .catch(error => console.log(error));
    }, [])

    if (storeItems.length !== 0) {
        const storeImage = storeItems[0]["data"]["attributes"];
        const storeProducts = storeItems[0]["included"];
        console.log(storeProducts)
        return(
            <div>
                <img className="store-sub-image" src={storeImage["sub_image"]}></img>
                <img className="store-icon-image" src={storeImage["icon_image"]}></img>
                <div className="store-products">
                    {storeProducts.map(product => (
                        <div>
                            <img className="product-image" src={product.attributes.image}></img>
                            <p className="product-name">{product.attributes.name}</p>
                            <p className="product-price">{product.attributes.price}</p>
                            <p className="product-like">{product.attributes.like}</p>
                            <p className="product-description">{product.attributes.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default StoreProducts;