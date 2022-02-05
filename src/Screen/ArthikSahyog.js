import React, { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import MenuBar from "../Component/MenuBar";
import MaterailTable from "material-table";
import { FaListOl } from "react-icons/fa"
import { Button, Modal, Table } from "react-bootstrap";
import axios from "axios";
import "../../src/App.css";
import { BeatLoader } from "react-spinners";
import { getAllActiveSahyogAnnouncement, getAllarthikSahyogAnnounceByMobile, 
    totalReceivedAmount , totalAnnounceAmount} from "../Component/UserApi";



const ArthikSahyog = () => {
    const count = 0;
    const [loading, setLoading] = useState(true);
    const [arthikSahyogList, setArthikSahyogList] = useState([]);
    const [mobile, setMobile] = useState("");
    const [receiptDetail, setReceiptDetail] = useState([]);
    const [totalReceive, setTotalReceive]= useState("");
    const [totalAnnounce, setTotalAnnounce] =useState("")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // console.log("afe" + receiptDetail)


    useEffect(() => {
        async function fetchData() {

            const response = await axios.get(`${getAllActiveSahyogAnnouncement}`);
            setArthikSahyogList(response.data);

            const res  = await axios.get(`${totalAnnounceAmount}`);
            setTotalAnnounce(res.data);

            const resp  = await axios.get(`${totalReceivedAmount}`);
            setTotalReceive(resp.data);
            setLoading(false);
        }
        fetchData();
    }, []);


    var x=totalAnnounce;
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var totalAnn = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    var x=totalReceive;
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var totalRec = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    var x=totalAnnounce-totalReceive;
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var pendding = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    



    const colom = [
        { title: "क्रम संख्या", field: "srNo", width: "25%", },
        { title: "सहयोगकर्ता का नाम", field: "name" },
        { title: " पता", field: "address" },
        { title: "घोषणा राशि", field: "announceAmount" },
        { title: "जमा राशि", field: "grandTotal" },
        { title: "बकाया राशि", field: "pendingAmount" },
        // { title: "विवरण", field: "detail" },
    ]


    const handleReceipt = async (data) => {
       
        const resp = await axios.post(`${getAllarthikSahyogAnnounceByMobile}`, {
            mobile: data.mobile

        })
         console.log(resp.data);

        setReceiptDetail(resp.data);
        setShow(true);



    }

    return (
        <div>
            <MenuBar />
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                <BeatLoader loading={loading} size={24} />
            </div>
            {/* <h3 className="Hover1">आर्थिक सहयोग सूची</h3> */}
            <h3 style={{ display: "flex", justifyContent: "center", alignContent: "center", color: "green", fontSize: 26, margin: 50 }}>-:आर्थिक सहयोग सूची:-</h3>
            <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", flexWrap: "wrap", alignContent: "center", fontSize: 20, fontWeight: 'bold', color: 'blue' }}>
                <div style={{ width: 300, backgroundColor: "Highlight", color: "white", marginBottom: 20, borderRadius: 15, padding: 10 }}>
                    <span style={{}}> कुल  घोषणा राशि - </span>
                    <span>{totalAnn}</span>
                </div>
                <div style={{ width: 300, backgroundColor: "lightgreen", marginBottom: 20, borderRadius: 15, padding: 10 }}>

                    <span style={{}}> कुल जमा राशि  - </span>
                    <span>{totalRec}</span>
                </div>
                <div style={{ width: 300, backgroundColor: "lightpink", color: "white", marginBottom: 20, borderRadius: 15, padding: 10 }}>
                    <span style={{}}>  कुल बकाया राशि  - </span>
                    <span>{pendding}</span>
            
                </div>
              

            </div>

            <MaterailTable
                title=""
                data={arthikSahyogList}
                columns={colom}
                options={{
                    exportButton: true, exportAllData: true,
                    sorting: true,
                    actionsColumnIndex: -1, searchFieldVariant: "outlined",
                    pageSizeOptions: [20, 30, 50, 100], pageSize: 20,

                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF', fontSize: 20
                    },

                }}
                actions={[
                    {
                        icon: () =>
                            <Button variant="primary"  ><FaListOl /></Button>
                        ,
                        tooltip: "Show Receipt Detail",
                        onClick: (e, data) => {
                            handleReceipt(data)
                        }



                    }

                ]}
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {
                        receiptDetail.map((data, index)=>{
                            return <Modal.Title style={{fontSize:20, color:"blue",fontWeight:"bold"}}>{data.name}</Modal.Title>
                        })
                    }
                    
                </Modal.Header>
                <Modal.Body>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr style={{backgroundColor:"blue" ,textAlign:"center", color:"white"}}>
                                <th>Sr.No</th>
                                <th>Receipt No</th>
                                <th>Receipt Date</th>
                                <th>Receipt Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //aarthikSahyogEntity

                                receiptDetail.map((data, index) => {
                                    //console.log(data)
                                    return (
                                        data.aarthikSahyogEntity.map((newdata,index)=>{
                                           // console.log(newdata)
                                            return <tr style={{backgroundColor:"pink",textAlign:"center"}}>
                                                <td>{index+1}</td>
                                                <td>{newdata.receiptNo}</td>
                                                <td>{ newdata.receiptDate.split('-').reverse().join('-')}</td>
                                                <td>{newdata.amount}</td>
                                            </tr>
                                        })
                                    )
                                       
                                    
                                    

                                })
                            }




                        </tbody>
                    </Table>

                </Modal.Body>

            </Modal>

            <Footer />

        </div>
    )
}
export default ArthikSahyog;
