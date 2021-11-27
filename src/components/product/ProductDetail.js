import React, { useEffect, useState } from "react";

const api_url = "http://localhost:3001/api/v1/stores/1/products/1"

const ProductDetail = () => {

    const [ productDetail, setProductDetail ] = useState([]);

    useEffect(() => {
        fetch(api_url)
        .then(resp => resp.json())
        .then(productData => setProductDetail([productData]))
        .catch(error => console.log(error));
    }, []);

    if (productDetail.length !== 0) {
        const detail = productDetail[0]
        return(
            <div>
                <img src={detail.image}></img>
                <div>
                    <h2>{detail.name}</h2>
                    <p>{detail.price}</p>
                    <p>{detail.like}</p>
                    <p>{detail.desription}</p>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default ProductDetail;