import React from "react";
import TitleLogin from "../../components/store/TitleLogin";
import StoreTitle from "../../components/store/StoreTitle";
import StoreProducts from "../../components/store/StoreProducts";

const StorePage = () => {

    // declare fetch and store into state and pass them to Store title and Store Products components

    return(
        <div>
            <TitleLogin />
            <StoreTitle />
            <StoreProducts />
        </div>
    )
}

export default StorePage;