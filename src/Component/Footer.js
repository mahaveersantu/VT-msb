import React from "react";
import footerimg from "../Image/footerimg.jpg"

const Footer=()=>
{
    let footerstyle ={fontSize:14, textAlign: 'center',fontFamily:"sans-serif",fontStyle:"oblique" }
    let footerstyleaqua ={fontSize:14, textAlign: 'center',fontFamily:"sans-serif",fontStyle:"oblique",color:"aquamarine" }
    
    return(
        <div style={{backgroundColor:"#002955",color:"white", fontSize:30,padding:10}}>            
            <h3 style={footerstyleaqua}>मोबाइल न0-  80790-68976, 94686-86953 ,96944-84119</h3>
            <h3 style={footerstyleaqua}>
                ई-मेल- veertejasangaliya@gmail.com </h3>
                <h3 style={footerstyle}
            >CopyRight  ©   Shree Veer TejaJi Vikash Samiti Sangaliya Sikar </h3>
        </div>
    );
}

export default Footer;