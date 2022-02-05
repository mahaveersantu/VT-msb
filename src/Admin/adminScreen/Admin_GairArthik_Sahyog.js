import React, { useEffect, useState } from "react";
import AdminMenuBar from "../adminComponent/Admin_MenuBar";
import { Form, Button, Table } from "react-bootstrap";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import {  FaEdit } from "react-icons/fa";
import { getAllGairAarthikSahyog, saveAndUpdateGairAarthikSahyog } from "../adminComponent/Admin_Api"


const AdminGairArthikSahyog = () => {
  const [contributorName, setContributorName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [contributionDetail, setContributionDetail] = useState("");
  const [estimatedAmount, setEstimatedAmount] = useState([]);
  const [status, setStatus] = useState("");
  const [showtable, setShowtable] = useState(true);
  const [showform, setShowform] = useState(false);
  const [gairSahyoglist, setGairSahyoglist] = useState([]);
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(true);

  const [nameErr, setNameErr] = useState("");
  const [addressErr, setAddressErr] = useState("");
  const [mobileErr, setMobileErr] = useState("");
  const [detailErr, setDetailErr] = useState("");
  const [amountErr, setAmountErr] = useState("");

 

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${getAllGairAarthikSahyog}`);
      setGairSahyoglist(response.data)
      setLoading(false);
    }
    fetchData();
  }, []);

  //form validation 
  function validate() {
    if (contributorName == "" && address == "" && mobile == "" && contributionDetail == "" && estimatedAmount == "") {
      // alert("1")
      setNameErr("Please Enter Name");
      setAddressErr("Please Enter address");
      setMobileErr("please Enter Mobile No");
      setDetailErr("Please Enter Deatil");
      setAmountErr("Please Enter Amount");
    }
    else if (address === "") { setAddressErr("Please Enter address") }
    else if (contributorName === "") { setNameErr("Please Enter Name") }

    else if (mobile === "" || mobile.length !== 10) { setMobileErr("Enter Mobile No. or Should be 10 digit") }
    else if (contributionDetail === "") { setDetailErr("Please Enter Deatil") }
    else if (estimatedAmount === "") { setAmountErr("Please Enter Amount") }
    else {
      return true;
    }
  }
  //handle submit
  const handleSubmit = async (e) => {
    
    //alert(" before valid form submit");
    setNameErr(""); setAddressErr(""); setMobileErr(""); setDetailErr(""); setAmountErr("");
    e.preventDefault();
    if (validate()) {
     
      //alert(contributorName,address,mobile,status,contributionDetail,estimatedAmount);
     const resp= await axios.post(`${saveAndUpdateGairAarthikSahyog}`, {
        id: id,
        name: contributorName,
        address: address,
        mobile: mobile,
        isActive: status,
        sahyogDetail: contributionDetail,
        approxCost: estimatedAmount,

      })
      
          if (resp.data === "success") {
            alert("Member Add  sucessful");
              setShowtable(true);setShowform(false);
             setMobile("");setContributionDetail("");
            setEstimatedAmount(""); setId(0);setContributorName("");setAddress("");setStatus("");
          }
          else if (resp.data === "fail") {
            alert("something was wrong")
            setShowtable(true);setShowform(false);
            setMobile("");setContributionDetail("");
            setEstimatedAmount(""); setId(0);setContributorName("");setAddress("");setStatus("");
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


                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "ActiveCaption" }}>
                  <div style={{ height: 580, width: 400, margin: 30, borderColor: '#ccc', borderWidth: 1 }}>
                    <Form onSubmit={handleSubmit}>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> ADD Gair Aarthik Sahyog Detail </Form.Label>
                        <Form.Control
                          type="input"
                          placeholder="Enter Name of contributor."
                          value={contributorName}
                          onChange={(e) => { setContributorName(e.target.value) }} />
                        <p style={{ color: "red" }}>{nameErr}</p>
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Address "
                          value={address}
                          onChange={(e) => { setAddress(e.target.value) }} />
                        <p style={{ color: "red" }}>{addressErr}</p>
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Mobile " 
                          maxLength={10}
                          value={mobile}
                          onChange={(e) => { setMobile(e.target.value) }} />
                        <p style={{ color: "red" }}>{mobileErr}</p>
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter detail "
                          value={contributionDetail}
                          onChange={(e) => { setContributionDetail(e.target.value) }} />
                        <p style={{ color: "red" }}>{detailErr}</p>
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Approximate Amount "
                          value={estimatedAmount}
                          onChange={(e) => { setEstimatedAmount(e.target.value) }} />
                        <p style={{ color: "red" }}>{amountErr}</p>
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Select
                          onChange={(e) => {
                            const selectedstatus = e.target.value;
                            setStatus(selectedstatus);
                            // alert(e.target.value);
                          }}
                        >
                          {/* <option >Select Status</option>
                          <option value="Y">Active</option>
                          <option value="N">In Active</option> */}
                             {status === "Y" ? <><option >Select Status</option>
                            <option value="Y" selected>Active</option>
                            <option value="N">In Active</option> </> :status ==="N"?
                            <><option >Select Status</option>
                              <option value="Y" >Active</option>
                              <option value="N" selected>In Active</option> </>:
                            <><option >Select Status</option>
                              <option value="Y" >Active</option>
                              <option value="N" >In Active</option> </>}

                        </Form.Select>
                      </Form.Group>

                      <div>
                        {(() => {
                          if (id == 0) {
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
     
                      <Button variant="danger" onClick={()=>{
                        setShowform(false); setShowtable(true);
                      setMobile("");setContributionDetail("");setEstimatedAmount(""); setId(0);
                       setContributorName("");setAddress("");setStatus("");
                       }} style={{marginLeft:90,marginTop:-65}}>
                        Close</Button>
                      <div>

                      </div>


                    </Form>
                  </div>

                </div></div>
            )
          }
          else if (showtable) {
            return (
              <div>   
                <AdminMenuBar />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                  <Button onClick={() => setShowform(true)} style={{ margin: 10 }}> Add Gair Arthik Sahlog detail</Button>   </div>

                <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                  <BeatLoader loading={loading} size={24} />
                </div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

                  <Table style={{ borderStyle: "groove", }}>
                    <thead >
                      <tr>
                        <th>  Sr.No. </th>
                        <th>   Name  </th>
                        <th>  Address  </th>
                        <th> Mobile No.  </th>
                        <th>  Detail  </th>
                        <th> Estimated Amount  </th>
                        <th> Status  </th>
                        <th> Action  </th>

                      </tr>
                    </thead>

                    <tbody>
                      {
                        gairSahyoglist.map((data, index) => {
                          return <tr key={index}>
                            <td>  {index + 1}  </td>
                            <td>  {data.name}  </td>
                            <td>  {data.address}  </td>
                            <td>  {data.mobile}  </td>
                            <td>  {data.sahyogDetail}  </td>
                            <td>  {data.approxCost}  </td>
                            <td> <div>
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
                            </div> </td>


                            <td>
                              <Button
                                onClick={() => {
                                  setContributorName(data.name);
                                  setAddress(data.address);
                                  setContributionDetail(data.sahyogDetail);
                                  setEstimatedAmount(data.approxCost);
                                  setMobile(data.mobile);
                                  setStatus(data.isActive);
                                  setShowform(true);
                                  setShowtable(false);
                                  setId(data.id);
                                }}> <FaEdit/> </Button>
                            </td>
                          </tr>
                        })}
                    </tbody>
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
export default AdminGairArthikSahyog;