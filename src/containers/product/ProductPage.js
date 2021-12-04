import React from "react";
import UserNav from "../../components/nav/UserNav";
import ProductDetail from "../../components/product/ProductDetail";
import Comment from "../../components/product/Comment";

const ProductPage = () => {
    return(
        <div>
            <UserNav />
            <ProductDetail />
            <Comment />
        </div>
    )
}

export default ProductPage;