import React, { useState, useEffect } from "react";
import AdminMenuBar from "../adminComponent/Admin_MenuBar";
import { Form, Button, Table } from "react-bootstrap";
import { BeatLoader } from "react-spinners";


import { FaPlusCircle ,FaRegEdit} from "react-icons/fa";
import { FiDelete} from "react-icons/fi";


import axios from "axios";
import { saveAndUpdateArthikSahyog, getAllSahyogAnnouncement, getAllSahyogAnnouncementForAdmin,
   saveAndUpdateArthikSahyogReceipt ,deleteReceipt, getAllActiveSahyogAnnouncement} from "../adminComponent/Admin_Api";



const AdminArthikSahyog = () => {

  const [contributorName, setContributorName] = useState("");
  const [contributorAddress, setcontributorAddress] = useState("")
  const [mobile, setMobile] = useState("")
  const [announcement, setAnnouncement] = useState("");
  const [announceDate, setAnnounceDate] = useState("");
  const [loading, SetLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [showtable, setShowtable] = useState(true);
  const [showform, setShowform] = useState(false);
  const [announcmentList, setAnnouncmentList] = useState([]);
  const [id, setId] = useState();
  var total = 0;
  const [aarthikSahyog, setAartikSahyog] = useState([]);
  const [isAddReceipt, setIsAddReceipt] =useState(false);
  const [receiptNo, setReceiptNo] =useState("");
  const [receiptDate, setReceiptDate] =useState("");
  const [receiptAmount, setReceiptAmount] =useState("");
  const [announceId, setAnnounceId] =useState("");
  const [annouceName, setAnnounceName] =useState("")
  const [activeAnnounce, setActiveAnnounce]=useState([]);

  useEffect(() => {
    async function fetchData() {
      
      // const res = await axios.get(`${getAllSahyogAnnouncement}`);
      // setAnnouncmentList(res.data);

      const res = await axios.get(`${getAllSahyogAnnouncementForAdmin}`);
      setAnnouncmentList(res.data);
     
      SetLoading(false);
    }
    fetchData();
  }, []);

 


  const hadleSubmit = async (e) => {
    // e.preventDefault();
     //alert(status);
      const resp = await axios.post(`${saveAndUpdateArthikSahyog}`, {
        name: contributorName,
        address: contributorAddress,
        mobile: mobile,
        announceAmount: announcement,
        isActive: status,
        annId: id
        // isActive: status,     
      }
      )

    console.log(resp);

    if (resp.data == "success") {
      alert("your Expenditure detail added sucessful");
    }
    if (resp.data == "fail") {
      alert("something was wrong")
    }
    if (resp.data == "exist") {
      alert("Mobile No. already Registered");
    }

  }

  function handleAddReceipt(data){
  
    // alert("add receipt called");
    //console.log(announcmentList);
   // alert(data.annId, data.name)
    setShowform(true)
    setAnnounceId(data.annId);
    setAnnounceName(data.name);
    setIsAddReceipt(true);
    setReceiptNo(""); setReceiptAmount(""); setReceiptDate("");

   
   }


   const receiptFormSubmit=async(e)=>{
    e.preventDefault();
    // alert("receipt form sumitted")
    const resp = await axios.post(`${saveAndUpdateArthikSahyogReceipt}`, {
      receiptNo:receiptNo,
      receiptDate:receiptDate,
      amount:receiptAmount,
      announceId:announceId,
      isActive:status,
      id:id,
     
    }
    )

  console.log(resp.data);

  if (resp.data == "success") {
    alert("your recipt  added sucessfully");
    setShowtable(true);setShowform(false); setReceiptAmount("");setReceiptNo(""); setAnnounceId("");setId("")
  }
  if (resp.data == "fail") {
    alert("something was wrong")
    setShowtable(true);setShowform(false);
  }
  if (resp.data == "exist") {
    alert("Mobile No. already Registered");
    setShowtable(true);setShowform(false);
  }


   }

   const handleEditReceipt=(data,dd)=>{
    //  console.log(data)
    //  console.log(dd)
     setShowform(true);
     setIsAddReceipt(true);
     setReceiptNo(data.receiptNo);
     setReceiptDate(data.receiptDate);
     setReceiptAmount(data.amount);
     setAnnounceId(dd.annId);
     setAnnounceName(dd.name)
     setId(data.id);

   }


   const handleDeleteReceipt= async(data)=>{
    //  alert(data.id)
   
   if(window.confirm("Are Your Sure To Delete"))
    {
     const resp = await axios.post(`${deleteReceipt}`, {
      receiptId:data.id  })
    if (resp.data == "success") {
      alert("your recipt  removed sucessfully");
      
    }
    if (resp.data == "fail") {
      alert("something was wrong")
      
    }
    
  }
 

 

   }
  
  return (

    <div>
      <div>
        {(() => {
          if (showform) {
            return (
              <div><AdminMenuBar />

                  {isAddReceipt?<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "ActiveCaption"}}>
                  
                  <div style={{ height: 400, width: 500, margin: 30, borderColor: '#ccc', borderWidth: "5px" }}>
                    <Form onSubmit={receiptFormSubmit}>

                    <Form.Group className="mb-3" >
                        <Form.Control
                         type="text"
                         readOnly
                        
                         value={annouceName}
                         
                        />
                      </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Control  
                    
                          type="input"
                          placeholder="Enter Receipt No."
                          value={receiptNo}
                          onChange={(e) => { setReceiptNo(e.target.value) }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Amount "
                          value={receiptAmount}
                          onChange={(e) => { setReceiptAmount(e.target.value) }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="date"
                          placeholder="Enter Receipt Date "
                          value={receiptDate}
                          onChange={(e) => {const selected=e.target.value; setReceiptDate(selected) }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="hidden"
                          name ="annId"
                          value={announceId}
                          
                        />
                      </Form.Group>
                      


                      <Button type="submit" style={{margin:20}}>Submit</Button>
                      <Button onClick={()=>{setShowtable(true);setShowform(false)}}>Close</Button>
                      
                    
                    </Form>
                  </div>
                  </div>:
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "ActiveCaption" }}>
                  <div style={{ height: 400, width: 500, margin: 30, borderColor: '#ccc', borderWidth: "5px" }}>
                   
                    <Form onSubmit={hadleSubmit}>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> ADD Financial Announcement Or Contribution Detail </Form.Label>

                        <Form.Control
                          type="input"
                          placeholder="Enter Contributor Name."
                          value={contributorName}
                          onChange={(e) => { setContributorName(e.target.value) }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Contributor Address "
                          value={contributorAddress}
                          onChange={(e) => { setcontributorAddress(e.target.value) }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Mobile no."
                          value={mobile}
                          onChange={(e) => { setMobile(e.target.value) }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Announcement Amount"
                          value={announcement}
                          onChange={(e) => { setAnnouncement(e.target.value) }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Select
                          onChange={(e) => {
                            alert(e.target.value);
                            const selectedstatus = e.target.value;
                            setStatus(selectedstatus);
                             
                          }}
                        >
                          <option >Select Status</option>
                          <option value="Y">Active</option>
                          <option value="N">In Active</option>
                        </Form.Select>
                        {/* {status} */}
                      </Form.Group>




                      <div>
                        {(() => {
                          if (id == null) {
                            return (
                              <div><Button variant="primary" type="submit">
                                Create
                              </Button></div>
                            )
                          } else {
                            return (
                              <div><Button variant="primary" type="submit">
                                Update
                              </Button></div>
                            )
                          }
                        })()}
         
                      </div>

                      <div style={{marginLeft:100,marginTop:-36}}>
                      <Button onClick={()=>{setShowtable(true);setShowform(false)}}>Close</Button>
                      </div>
                      
                     

                    </Form>
                  </div>
                </div>

                  </div>
                  
                  }

                </div>
            )
          }
          else if (showtable) {
            return (
              <div>
                <AdminMenuBar />
                <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', margin: 20 }}>
                  {/* <div>Total Arthik Sahyog{ }</div> */}
                  <div><Button onClick={() => setShowform(true)} style={{ margin: 10 }}> Add Arthik Ghoshna</Button></div>
                  <BeatLoader loading={loading} size={24} />

                </div>



                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

                  <Table style={{ borderStyle: "groove", }}>
                    <thead >
                      <tr>
                        
                        <th style={{backgroundColor:"pink", width:5}}>  Sr.No</th>
                        <th style={{backgroundColor:"pink"}}> Action  </th>
                        < th style={{backgroundColor:"pink"}}>  Name </th>
                        <th style={{backgroundColor:"pink"}}>  Address  </th>
                        <th style={{backgroundColor:"pink"}}> Mobile No.  </th>
                        <th style={{backgroundColor:"pink"}}> Announcement<br /> Amount  </th>
                        <th style={{backgroundColor:"pink"}}> Status  </th>
                        <th style={{backgroundColor:"lightgreen"}}>Action</th>
                        <th style={{backgroundColor:"lightgreen"}}> Total Received <br />Amount  </th>
                        <th style={{backgroundColor:"lightgreen"}}> Receipt No.  </th>
                        <th style={{backgroundColor:"lightgreen"}}> Receipt Date  </th>
                        <th style={{backgroundColor:"lightgreen"}}> Receipt Amount  </th>
                        {/* <th style={{backgroundColor:"lightgreen"}}>Status</th> */}
                        <th style={{backgroundColor:"lightgreen"}}>Action</th>
                        <th style={{backgroundColor:"lightgreen"}}>Delete<br/>Receipt</th>



                      </tr>
                    </thead>

                    <tbody>

                      
                      
                      {

                      
                        announcmentList.map((data, index) => {

                          // total+=total+data.expdAmount;
                         
                            return  <tr key={index}>
                            {/* {setTotalExpenditure(total)} */}
                            <td style={{backgroundColor:"pink"}}>  {index + 1} </td>
                            <td style={{backgroundColor:"pink"}}>
                              <Button 
                                onClick={() => {

                                  setContributorName(data.name);
                                  setcontributorAddress(data.address);
                                  setMobile(data.mobile);
                                  setAnnouncement(data.announceAmount);
                                  // setAnnounceDate();
                                  setStatus(data.isActive);
                                  setShowform(true);
                                  setShowtable(false);
                                  setIsAddReceipt(false)
                                  setId(data.annId);
                                }}> <FaRegEdit/></Button>
                            </td>
                            <td style={{backgroundColor:"pink"}}>  {data.name}  </td>
                            <td style={{backgroundColor:"pink"}}>  {data.address}  </td>
                            <td style={{backgroundColor:"pink"}}>  {data.mobile}  </td>
                            <td style={{backgroundColor:"pink"}}>  {data.announceAmount}  </td>

                            <td style={{backgroundColor:"pink"}}>
                              <div>
                                {(() => {
                                  if (data.isActive === "y" || data.isActive === "Y") {
                                    return (
                                      <div>Active</div>
                                    )
                                  }
                                  else {
                                    return (
                                      <div>In Active</div>
                                    )
                                  }
                                })()}
                              </div>
                            </td>
                             

                            <td style={{backgroundColor:"lightgreen"}}><Button variant="danger" onClick={()=>{handleAddReceipt(data); }}><FaPlusCircle/></Button></td>
                            <td style={{backgroundColor:"lightgreen"}}> { data.grandTotal} </td>
                            <td colspan="6" style={{backgroundColor:"lightgreen"}}>
                            {
                              data.aarthikSahyogEntity.map((newdata)=>{
                                return  (
                                  <table style={{ width:"100%"}}>
                                  <tr>
                                  <td style={{backgroundColor:"lightgreen", width:"15%"}}> { newdata.receiptNo}  </td>
                            <td style={{backgroundColor:"lightgreen", width:"30%"}}>{ newdata.receiptDate.split('-').reverse().join('-')}  </td>
                            <td style={{backgroundColor:"lightgreen", width:"25%"}}> {newdata.amount }  </td>
                          
                            <td style={{backgroundColor:"lightgreen",width:"15%"}}><Button variant="danger" onClick={()=>{handleEditReceipt(newdata ,data)}}><FaRegEdit/></Button></td>
                            <td style={{backgroundColor:"lightgreen",width:"15%"}}><Button variant="danger" onClick={()=>{handleDeleteReceipt(newdata)}}><FiDelete/></Button></td>
                          
                                  </tr>
                                </table>

                                ) 
                              })
                            }
                            </td>
  </tr>
                         


                        })}


                    </tbody>
                    {/* {setTotalExpenditure({total})} */}
                    {/* Total Aarthik Sahyog:-<h4> { }</h4> */}
                  </Table>
                </div>
              </div>
            )
          }
        })()}
      </div>





    </div>
  )
}
export default AdminArthikSahyog;