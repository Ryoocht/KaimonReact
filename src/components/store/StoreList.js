import React, { useEffect, useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from "react-router-dom";

const api_url = "http://localhost:3001/api/v1/stores"

const StoreList = () => {

    const [ stores, setStores ] = useState([]);
    const [ storeId, setStoreId ] = useState(0);

    useEffect(() => {
        fetch(api_url)
        .then(resp => resp.json())
        .then(store_items => setStores([store_items]))
        .catch(error => console.log(error))
    }, [])

    const handleClick = e => {
        e.preventDefault();
        // console.log(e.target.alt)
        console.log(e.target.parentElement.parentElement)
        setStoreId(e.target.value);
    }

    if (stores.length !== 0) {
        return(
            <Link to={"/store"} id={storeId} onClick={handleClick}>
            <ImageList sx={{width: 600, height: 600}}>
                {stores[0]["data"].map(store => (
                    <ImageListItem key={store.attributes.id}>
                        <div id={store.attributes.id}>
                        <img 
                            src={`${store.attributes.top_image}?w=248&fit=crop&auto=format`}
                            srcSet={`${store.attributes.top_image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={store.attributes.id}
                            loading="lazy"
                        />
                        <ImageListItemBar 
                            id={store.attributes.id}
                            title={store.attributes.name}
                            subtitle={<span>3km away</span>}
                            position="below"
                        /></div>
                    </ImageListItem>
                    )
                )}
            </ImageList>
            </Link>
        );
    } else {
        return null;
    }
}

export default StoreList;