import React from "react";
import {Card, Table} from "react-bootstrap"

const Cards2 =(props)=>
{

    return(
        <div style={{width: '22rem',alignSelf:"center"}}>
          

            <Card  style={{  marginBottom:20, backgroundColor:"lightblue",}}>
            <Card.Header style={{fontSize:20, fontWeight:"bold", backgroundColor:"green", color:"white",textAlign:"center"}}>{props.title}</Card.Header>
            {/* <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup> */}
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
    
  </tbody>
</Table>
            </Card.Body>
            </Card>
           
        </div>
    )
}
export default Cards2;