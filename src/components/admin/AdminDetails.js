import React, { useEffect, useState } from "react";
import AdminStores from "./AdminStores";
import AdminProfile from "./AdminProfile";


const api_url = 'http://localhost:3001/api/v1/admin/admins/1'

const AdminDetails = () => {

    const [ adminInfo, setAdminInfo ] = useState([]);

    useEffect(() => {
        fetch(api_url)
        .then(resp => resp.json())
        .then(storeData => setAdminInfo([storeData]))
        .catch(error => console.log(error));
    }, []);

    if (adminInfo.length !== 0) {
        return(
            <div>
                <AdminProfile profile={adminInfo[0]["data"]["attributes"]} />
                <AdminStores stores={adminInfo[0]["included"]} />
            </div>
        )
    } else {
        return null;
    }
}

export default AdminDetails;