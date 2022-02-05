import React from "react";
import AdminMenuBar from "../adminComponent/Admin_MenuBar";

const AdminHome =()=>
{
    return(
        <div >
             <AdminMenuBar/>
             <div style={{display:"flex",alignItems:"center",justifyContent:"center,", color:"purple", margin:150,}}>
             <h1> Hi Admin, Welcome to Admin Panel</h1>
             </div>
             
        </div>
    )
}
export default AdminHome;