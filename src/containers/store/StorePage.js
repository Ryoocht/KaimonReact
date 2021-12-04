import React, { useEffect, useState } from "react";
import "../../style/store/StorePage.css";
import UserNav from "../../components/nav/UserNav";
import ProductCart from "../../components/cart/ProductCart";
import StoreTitle from "../../components/store/StoreTitle";
import StoreProducts from "../../components/store/StoreProducts";
import { useLocation } from "react-router";

const api_url = "http://localhost:3001/api/v1/stores/"

const StorePage = () => {

    const [ storeData, setStoreData ] = useState([]);
    const storeId = useLocation().pathname.split("/")[2];

    useEffect(() => {
        fetch(`${api_url}${storeId}`)
        .then(resp => resp.json())
        .then(storeInfo => setStoreData(storeInfo))
        .catch(error => console.log(error));
    },[]);

    if (storeData.length !== 0) {
        const storeImages = storeData["data"]["attributes"];
        const storeProducts = storeData["included"];

        return(
            <div>
                <UserNav />
                <ProductCart />
                <StoreTitle images={storeImages} />
                <StoreProducts products={storeProducts} storeId={storeId}/>
            </div>
        )
    } else {
        return null;
    }
}

export default StorePage;