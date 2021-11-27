import React from "react";
import AdminLogout from "../../components/admin/AdminLogout";
import AdminMenu from "../../components/admin/AdminMenu";
import AdminStoreList from "../../components/admin/AdminStoreList";

const AdminPage = () => {
    return(
        <div>
            <AdminLogout />
            <AdminMenu />
            <AdminStoreList />
        </div>
    )
}

export default AdminPage;