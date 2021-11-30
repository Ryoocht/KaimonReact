import React from "react";

const AdminStores = props => {

    const stores = props.stores

    const consoleProps = () => {
        stores.map(store => console.log(store.attributes.name))
    }
    
    return (
        <div>
            <p onClick={consoleProps}>CLICK HERE</p>
            {stores.map(store => (
                <div>
                    <img className="store-icon_image" src={store.attributes.icon_image}></img>
                    <p>{store.attributes.name}</p>
                </div>
            ))}
        </div>
    )
}

export default AdminStores;