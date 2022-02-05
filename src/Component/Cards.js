import React,{useEffect, useState} from "react";
import {Card, Table} from "react-bootstrap";
import axios from "axios";

import { getTopTenSahyog} from "../Component/UserApi";


const Cards =(props)=>
{

  const [topTenSahyog, setTopTenSahyog] =useState([]);

  useEffect(() => {
    async function fetchData() {
      const topten = await axios.get(`${getTopTenSahyog}`);
      setTopTenSahyog(topten.data);
     
    }
    fetchData();
  }, []);


    return(
        <div style={{width: '22rem',alignSelf:"center"}}>
          

            <Card  style={{  marginBottom:40, backgroundColor:"lightblue", height:260}}>
            <Card.Header style={{fontSize:20, fontWeight:"bold", backgroundColor:"green", color:"white",textAlign:"center"}}>{props.title}</Card.Header>
            {/* <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup> */}
            <Card.Body  style={{overflowY:"auto",}}>
            <Table striped bordered hover variant="light">
  
  <tbody>
  {/* <tr>
      
      <td>{1}</td>
      <td style={{fontWeight:"bold"}}>2</td>
    
    </tr> */}
     
{
  
       topTenSahyog.map((data, index)=>{
        let x =data.grandTotal;
        x=x.toString();
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
            lastThree = ',' + lastThree;
        var grandTotal = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

         return <tr key={index} >
           <td>{index+1}</td>
         <td>{data.name}</td>

          

         <td style={{fontWeight:"bold"}}>{grandTotal}</td>
         </tr>
       })
     }
    
    
  </tbody>
</Table>
            </Card.Body>
            </Card>
           
        </div>
    )
}
export default Cards;