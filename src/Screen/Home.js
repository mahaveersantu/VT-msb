import React, { useEffect, useState } from "react";
import MenuBar from "../Component/MenuBar";
import Slider from "../Component/Slider";
import LatestNews from "../Component/LatestNews";
import Footer from "../Component/Footer";
import Cards from "../Component/Cards";
import Cards4 from "../Component/Cards4";
import { Container, Col, Row, } from "react-bootstrap";
import Cards2 from "../Component/Cards2";
import "../../src/App.css";
import axios from "axios";
import { totalUniqueVisitors, totalVisitors, totalExpenditure ,totalReceivedAmount,
  totalAnnounceAmount ,totalExpenditureLastMonth, getTopTenSahyog, totalReceivedLastMonth} from "../Component/UserApi";


const Home = () => 
{
  const [totalVisitor, setTotalVisitor] = useState("");
  const [uniqueVisitor, setUniqueVisitor]= useState("");
  const [totalExp, setTotalExp]= useState("")
  const [totalExpLastMonthList,setTotalExpMonthList]=useState("");
  const [totalReceive, setTotalReceive]= useState("");
  const [totalAnnounce, setTotalAnnounce] =useState("");
  const [lastMonthReceive, setLastMonthReceive] =useState("");
  

    

 

  useEffect(() => {
    async function fetchData() {
    
      const unique= await axios.get(`${totalUniqueVisitors}`)
      setUniqueVisitor(unique.data);

      const totalV= await axios.get(`${totalVisitors}`)
      setTotalVisitor(totalV.data);
   
      const result = await axios.get(`${totalExpenditure}`);
      setTotalExp(result.data);

      const response  = await axios.get(`${totalAnnounceAmount}`);
      setTotalAnnounce(response.data);

       const resp  = await axios.get(`${totalReceivedAmount}`);
      setTotalReceive(resp.data);

      const respp = await axios.get(`${totalExpenditureLastMonth}`);
      setTotalExpMonthList(respp.data);

      const lastmonth = await axios.get(`${totalReceivedLastMonth}`);
      setLastMonthReceive(lastmonth.data);
     // alert(totalExpLastMonthList)

      
      // setLoading(false);
    }
    fetchData();
  }, []);


  //get My ip Address
  
  var x=lastMonthReceive;
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
   // alert(res);

   var x=totalExp;
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res1 = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    var x=totalAnnounce;
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res2 = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    var x=totalReceive;
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res3 = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    var x=totalExpLastMonthList;
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res4 = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    var bachat =totalReceive-totalExp;

    var x=bachat;
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var finalBachat = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;


  return (
    <div>
      <MenuBar />
    
      <Slider />
     
      <Container style={{ marginTop: 70 }}>
        <Row >
          <Col><Cards title="10 उच्चतम भामाशाह"  /></Col>
          <Col><Cards4 title="कुल प्राप्ति और खर्चा" subtitle1="कुल घोषणा" subtitle2=" कुल प्राप्ति " subtitle3=" कुल खर्चा" subtitle4="कुल बचत " value1={res2} value2={res3} value3={res1} value4={finalBachat} /></Col>
          <Col><Cards4 title="गत मास का कुल प्राप्ति और खर्चा" subtitle1=" गत मास का कुल प्राप्ति" subtitle2={res} subtitle3="गत मास का कुल खर्चा" subtitle4={res4} value1="" value2=" " value3="" value4=""  /></Col>
        </Row>
        <Row >
          <Col><Cards4 title="गूगल / फ़ोन पे " subtitle1=" Name" subtitle2="GooglePay No." subtitle3="PhonePay No" subtitle4="Paytm" value1="Mahaveer Singh" value2="********** " value3="**********" value4="**********" /></Col>
          <Col><Cards4 title="समिति बैंक खाता विवरण" subtitle1="खाता धारक का नाम" subtitle2="बैंक नाम " subtitle3="खाता संख्या" subtitle4="IFSC कोड" value1="shree veer teja vikas samiti sangaliya" value2="Axis Bank Losal" value3="920010003873067" value4="UTIB0001795" /></Col>
          <Col><Cards4 title="Visitors" subtitle1=" Unique Visitors" subtitle2= {uniqueVisitor} subtitle3="Total Visitors" subtitle4={totalVisitor} value1="" value2="" /></Col>

        </Row>
        
      </Container>

        
      <LatestNews />

      <Footer />
    </div>
  );
}
export default Home;