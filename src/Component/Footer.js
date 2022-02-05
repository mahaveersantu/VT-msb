import React from "react";
import footerimg from "../Image/footerimg.jpg"

const Footer=()=>
{
    let footerstyle ={fontSize:14, textAlign: 'center',fontFamily:"sans-serif",fontStyle:"oblique" }
    let footerstyleaqua ={fontSize:14, textAlign: 'center',fontFamily:"sans-serif",fontStyle:"oblique",color:"aquamarine" }
    
    return(
        <div style={{backgroundColor:"#002955",color:"white", fontSize:30,padding:10}}>            
            <h3 style={footerstyleaqua}>मोबाइल न0-  9829699996 ,8079058228, 9057567917</h3>
            <h3 style={footerstyleaqua}>
                ई-मेल- veertejatrustchindri@gmail.com </h3>
                <h3 style={footerstyle}
            >CopyRight  ©  Chindari Shree Veer TejaJi Mandir Vikash Trust </h3>
        </div>
    );
}

export default Footer;