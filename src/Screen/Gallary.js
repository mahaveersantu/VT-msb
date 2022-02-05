import React from "react";
import Footer from "../Component/Footer";
import GallaryList from "../Component/GallaryList";
import MenuBar from "../Component/MenuBar";



const Gallary=()=>
{
    return(
        <div>
            <MenuBar/>
            {/* <h1>Mandir Gallary</h1> */}
            <GallaryList/>
            {/* <MyGallery/> */}
           
           <Footer/>


        </div>
    )
}
export default Gallary;