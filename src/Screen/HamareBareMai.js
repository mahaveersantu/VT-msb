import React from "react";
import Footer from "../Component/Footer";
import MenuBar from "../Component/MenuBar";
import { Card, Image, Col, Container, Row } from "react-bootstrap"
import "../../src/App.css";
import surendraimg from "../Image/Surendra.jpg";
import mahaveerimg from "../Image/Mahaveer.jpg";


const HamareBareMai = () => {
    return (
        <div>
            <MenuBar />
            <div style={{ margin: "15px", backgroundColor: "navy" }}>
                <Card className="text-center" style={{ height: '15rem', borderWidth: 2, borderColor: "black", borderRadius: 35 }} >
                    <Card.Body>
                        <Card.Title style={{ color: "white", fontSize: 26, fontWeight: "bold", backgroundColor: "green" }}> -:डिजिटल दानदाताओ के लिये:-</Card.Title>
                        <Card.Text style={{ color: "black", fontSize: 22, fontWeight: "bold", }}>
                            फोन पे/ गूगल पे/ पेटीएम<br></br>
                            Mob. 9214596097 (Baga Ram Choudhary)
                        </Card.Text>

                    </Card.Body>

                </Card>
            </div>

            <div style={{ margin: "15px", backgroundColor: "navy" }} >
                <Card className="text-center" style={{ height: '15rem', borderWidth: 2, borderColor: "black", borderRadius: 35 }} >
                    <Card.Body>
                        <Card.Title style={{ color: "white", fontSize: 26, fontWeight: "bold", backgroundColor: "green" }}>-:सम्पर्क सूत्र:-</Card.Title>
                        <Card.Text style={{ color: "black", fontSize: 22, fontWeight: "bold",  }}>
                            मोबाइल न0-  9214596097
                            <br></br>
                            ई-मेल- veertejachindari@gmail.com
                        </Card.Text>
                    </Card.Body>

                </Card>
            </div>

            <div style={{ margin: "15px", backgroundColor: "navy" }}>
                <Card className="text-center" style={{ height: '15rem', borderWidth: 2, borderColor: "black", borderRadius: 35 }} >
                    <Card.Body>
                        <Card.Title style={{ color: "white", fontSize: 26, fontWeight: "bold", backgroundColor: "green" }}> -:बैंक खाता विवरण:-</Card.Title>
                        <Card.Text style={{ color: "black", fontSize: 22, fontWeight: "bold",  }}> Account holder Name:-****** <br></br>
                            Account No.:-******* <br></br>
                            Ifsc Code :-****** <br></br>
                            Bank Name :-****** </Card.Text>

                    </Card.Body>

                </Card>
            </div>



            <div style={{margin:10, padding:10, marginTop:150, marginBottom:100}}>
            <Row style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
                <Card bg ="warning" style={{ width: '18rem',color:"white" }}>
                    <Card />
                    <Card.Body>
                        <Card.Title>Website Developed By</Card.Title>
                        <Card.Text>
                           <label> Mr. Surendra Yadav</label>
                            <label>Mobile 9785611585</label>
                        </Card.Text>
                    </Card.Body>
                </Card>
               
                <Col style={{display:"flex", justifyContent:"center", alignContent:"center"}} >
                    <Image id="box1" src={surendraimg} roundedCircle style={{ width: 200, height:200, alignItems:"center", margin:10}}/>
                </Col>
                <Card bg ="success"style={{ width: '18rem',color:"white"  }}>
                    <Card />
                    <Card.Body>
                        <Card.Title>Website Designed By</Card.Title>
                        <Card.Text>
                          <label> Mr. Mahaveer Choudhary</label>
                           <label>Mobile-9694484119</label>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Col style={{display:"flex", justifyContent:"center", alignContent:"center"}} >
                <Image id="box" src={mahaveerimg} roundedCircle style={{ width: 200, height:200, margin:10 }} />
                </Col>
            </Row>

            </div>


            <Footer />

            </div>
    )
}
export default HamareBareMai;