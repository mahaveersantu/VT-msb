import React from "react";
import image1 from "../Image/image1.jpg";
import image2 from "../Image/image2.jpg";
import image3 from "../Image/image3.jpg";
import image4 from "../Image/image4.jpg";
import image5 from "../Image/image5.jpg";
import image6 from "../Image/image6.jpg";
import image7 from "../Image/image7.jpg";
// import image8 from "../Image/image8.jpeg";
// import image9 from "../Image/image9.jpeg";
// import image10 from "../Image/image10.jpeg";
// import image11 from "../Image/image11.jpeg";
import logo from "../Image/logo.jpeg";
import { Container } from "react-bootstrap";


const GallaryList =()=>{
    return(
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"space-around",}}>
         
         {/* <div style={{margin:50}}> */}
             <Container>
           {/*  <img alt="logo" src ={logo}    height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}}/> */}
            <img alt="image1" src ={image1} height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}}/>
            <img alt="image2" src ={image2} height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}}/>
            <img alt="image3" src ={image3} height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}} />
            <img alt="image4" src ={image4} height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}} />
            <img alt="image5" src ={image5} height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}} />
            <img alt="image6" src ={image6} height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}} />
            <img alt="image7" src ={image7} height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}} />
            {/* <img alt="image8" src ={image8} height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}} />
            <img alt="image9" src ={image9} height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}} />
            <img alt="image10" src ={image10} height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}} />
            <img alt="image11" src ={image11} height={500} width={350} style={{margin:10,borderStyle:"outset",borderColor:"#ed11c1", borderWidth:4}} /> */}
         </Container>
         {/* </div> */}
         {/* <div>
         <img alt="image1" src ={image1} height={500} width={700} />
            <img alt="image1" src ={image1} height={500} width={700} />
            <img alt="image1" src ={image1} height={500} width={700} />
            <img alt="image1" src ={image1} height={500} width={700} />
         </div> */}


 

        </div>
    )
}
export default GallaryList;