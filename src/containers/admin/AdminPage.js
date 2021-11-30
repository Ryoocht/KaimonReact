import React from "react";
import AdminLogout from "../../components/admin/AdminLogout";
import AdminMenu from "../../components/admin/AdminMenu";
import AdminDetails from "../../components/admin/AdminDetails";

const AdminPage = () => {
    return(
        <div>
            <AdminLogout />
            <AdminMenu />
            <AdminDetails />
        </div>
    )
}

export default AdminPage;