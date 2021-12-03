import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const api_url = "http://localhost:3001/api/v1/stores"

const StoreList = () => {

    const [ stores, setStores ] = useState([]);

    useEffect(() => {
        fetch(api_url)
        .then(resp => resp.json())
        .then(store_items => setStores([store_items]))
        .catch(error => console.log(error))
    }, [])

    if (stores.length !== 0) {
        const storeArray = stores[0]["data"];

        return(
            <div>
                <div className="store-list-container">
                    <h3 className="list-title">Local Stores</h3>
                    <div className="store-list">
                    {storeArray.map(store => (
                        <Link to={"/store/" + store.id} key={store.id} className="store-link-container">
                            <img className="store-top-img" src={store.attributes.top_image} alt="top-image"></img>
                            <p key={store.id} className="store-name">{store.attributes.name}</p>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default StoreList;