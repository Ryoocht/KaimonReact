import React from "react";

const StoreTitle = props => {
    const images = props.images;

    return(
        <div className="store-title-container">
            <img src={images.sub_image} className="sub-image" alt="sub"></img>
            <img src={images.icon_image} className="icon-image" alt="icon"></img>
            <h2 className="store-title">{images.name}</h2>
        </div>
    )
}

export default StoreTitle;