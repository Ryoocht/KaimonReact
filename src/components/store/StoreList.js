import React, { useEffect, useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const api_url = "http://localhost:3001/api/v1/stores"

const StoreList = () => {

    const [ stores, setStores ] = useState();

    useEffect(() => {
        fetch(api_url)
        .then(resp => resp.json())
        .then(store_items => setStores(store_items))
        .catch(error => console.log(error))
    }, [])

    return(
        <ImageList sx={{width: 500, height: 450}}>
            {/* {stores.map(store => (
                <ImageListItem key={store.id}>
                    <img 
                        src={`${store.top_image}?w=248&fit=crop&auto=format`}
                        srcSet={`${store.top_image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={store.name}
                        loading="lazy"
                    />
                    <ImageListItemBar 
                        title={store.name}
                        subtitle={<span>3km away</span>}
                        position="below"
                    />
                </ImageListItem>
            ))} */}
        </ImageList>
    );
}

export default StoreList;