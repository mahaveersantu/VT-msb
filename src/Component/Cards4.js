import React from "react";
import {Card, Table} from "react-bootstrap"

const Cards4 =(props)=>
{

    return(
        <div style={{width: '22rem',alignSelf:"center"}}>
          

            <Card  style={{  marginBottom:40, backgroundColor:"lightblue",}}>
            <Card.Header style={{fontSize:20, fontWeight:"bold", backgroundColor:"green", color:"white",textAlign:"center"}}>{props.title}</Card.Header>
           
            <Card.Body>
            <Table striped bordered hover variant="light">
  
  <tbody>
    <tr>
      
      <td>{props.subtitle1}</td>
      <td style={{fontWeight:"bold"}}>{props.value1}</td>
    
    </tr>
    <tr>
      
      <td>{props.subtitle2}</td>
      <td style={{fontWeight:"bold"}}>{props.value2}</td>
    
    </tr>
    <tr>
     
      <td>{props.subtitle3}</td>
      <td style={{fontWeight:"bold"}}>{props.value3}</td>
    </tr>
    <tr>
     
      <td>{props.subtitle4}</td>
      <td style={{fontWeight:"bold"}}>{props.value4}</td>
    </tr>
  </tbody>
</Table>
            </Card.Body>
            </Card>
           
        </div>
    )
}
export default Cards4;