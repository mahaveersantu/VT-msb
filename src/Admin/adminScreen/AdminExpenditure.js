import React, { useEffect, useState } from "react";
import AdminMenuBar from "../adminComponent/Admin_MenuBar"
import { Form, Button, Table, Container, Modal } from "react-bootstrap";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import { FaUpload, FaDownload, FaEdit } from "react-icons/fa";
import {
  getAllcategories, getAllExpenditures, saveAndUpdateExpenditure,
  getExpenditureByCatId, saveExpenditureReceipt, downloadReceipt
} from "../adminComponent/Admin_Api";



const AdminExpenditure = () => {

  const [catlist, setCatlist] = useState([]);
  const [receiptNo, setReceiptNo] = useState("");
  const [amount, setAmount] = useState("");
  const [expDate, setExpDate] = useState("");
  const [detail, setDetail] = useState("");
  const [photo, setPhoto] = useState();
  const [receiverName, setReceiverName] = useState("")
  const [status, setStatus] = useState("");
  const [catId, setCatId] = useState("");
  const [showtable, setShowtable] = useState(true);
  const [showform, setShowform] = useState(false);
  const [explist, setExplist] = useState([]);
  const [id, setId] = useState(0);  
  const [totalExpenditure, setTotalExpenditure] = useState(0);
  const [loading, SetLoading] = useState(true);
  var formdata = new FormData();


  const [receiptErr, setReceiptErr] = useState("");
  const [amountErr, setAmountErr] = useState("");
  const [dateErr, setDateErr] = useState("");
  const [detailErr, setDetailErr] = useState("");
  const [receiverErr, setReceiverErr] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  //send receipt no in modal for upload a receipt
  const handleShow = (event) => {
    setShow(true);
    setReceiptNo(event.expdReceiptNo);
  }

  var total = 0;

  //get all category and all expenditure
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${getAllcategories}`);
      setCatlist(response.data);

      const res = await axios.get(`${getAllExpenditures}`);
      setExplist(res.data);

      SetLoading(false);
    }
    fetchData();
  }, []);



  //form validation
  function validate() {

    if (receiptNo === "" && amount === "" && expDate === "" && detail === "" && receiverName === "") {
      setReceiptErr("Please Enter Receipt No."); setAmountErr("Please Enter Amount.");
      setDateErr("Please Enter Date."); setDetailErr("Please Enter detail.");
      setReceiverErr("Please Enter receiver Name.");
    }

    else if (receiptNo == "") { setReceiptErr("Please Enter Receipt No."); }
    else if (amount === "") { setAmountErr("Please Enter Amount."); }
    else if (expDate === "") { setDateErr("Please Enter Date."); }
    else if (detail === "") { setDetailErr("Please Enter detail."); }
    else if (receiverName == "") { setReceiverErr("Please Enter receiver Name."); }
    else {
      return true;
    }
  }
  const handleselectchange = (e) => {

    setCatId(e.target.value);
  }

  //handle form submit
  const handleSubmit = async (e) => {
    setReceiptErr(""); setAmountErr(""); setDateErr("");
    setReceiverErr(""); setDetailErr("");
    e.preventDefault();
    if (validate()) {
      //alert(receiverName);

      const resp = await axios.post(`${saveAndUpdateExpenditure}`, {
        expdReceiptNo: receiptNo,
        expdAmount: amount,
        receiverName: receiverName,
        expdDate: expDate,
        expdDetail: detail,

        isActive: status,
        expdTitle: " null",
        expenditureCatEntity: { catId: catId },
        expdId: id
      })

     if (resp.data == "success") {
        alert("your Expenditure detail Add or Update sucessfully");
        setShowtable(true); setShowform(false);setReceiptNo(""); setAmount(""); setReceiverName(""); setAmount(""); setDetail(""); setStatus("");
        setCatId(""); setId(0);setExpDate("")
      }
      if (resp.data == "fail") {
        alert("something was wrong")
        setShowtable(true); setShowform(false);setReceiptNo(""); setAmount(""); setReceiverName(""); setAmount(""); setDetail(""); setStatus("");
        setCatId(""); setId(0);setExpDate("")
      }
      if (resp.data == "exist") {
        alert("Expenditure Receipt Already Exist")
        setShowtable(true); setShowform(false);setReceiptNo(""); setAmount(""); setReceiverName(""); setAmount(""); setDetail(""); setStatus("");
        setCatId(""); setId(0);setExpDate("")
      }
      
     
    }


    e.preventDefault();

  }

  // get all expditure list on selected categgory
  const handleSelectedCat = async (e) => {

    if (e.target.value === "सभी खर्चे") {
      SetLoading(true);
      const response = await axios.get(`${getExpenditureByCatId}`)
        .then((resp) => {
          setExplist(response.data);
          SetLoading(false);


        })
    }
    SetLoading(true);
    await axios.post(`${getExpenditureByCatId}`, { catId: e.target.value })

      .then((resp) => {
        // console.log(`change cat id${resp.data}`)
        // console.log()
        setExplist(resp.data);
        SetLoading(false);

      })

  }



  return (
    <div >
      <div>
        {/* Modal for Upload Receipt No */}
        <Modal show={show} onHide={handleClose} style={{ height: 400 }}>
          <Modal.Header closeButton>
            <Modal.Title>Receipt No-{receiptNo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="post" action={saveExpenditureReceipt} encType="multipart/form-data">

              <input type="file" name="receipt" required accept="image/jpeg , image/jpg" />

              <label style={{ color: "green" }}>Image Size Limit 2MB</label>
              <input type="hidden" name="receiptNo" value={receiptNo} />
              <div style={{ display: "flex", justifyContent: 'right', alignContent: "center" }}>
                <div>
                  <Button variant="success" type="submit" style={{ margin: 10 }} >Upload Receipt </Button>
                  <Button variant="warning" onClick={handleClose} style={{ margin: 10 }}>  Close </Button>
                </div>

              </div>

            </form>
          </Modal.Body>
        </Modal>
      </div>
      {/* modal code  finished */}

      <div>
        {(() => {
          // show form for input detail
          if (showform) {
            return (
              <div>
                <AdminMenuBar />


                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "ActiveCaption" }}>
                  <div style={{ height: 600, width: 400, margin: 30, borderColor: '#ccc', borderWidth: 1 }}>
                    <Form onSubmit={handleSubmit}>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> ADD Expenditure Detail </Form.Label>


                        <Form.Control
                          type="input"
                          placeholder="Enter Receipt No."
                          value={receiptNo}
                          onChange={(e) => { setReceiptNo(e.target.value) }} />
                        <p style={{ color: "red" }}>{receiptErr}</p>
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Amount "
                          value={amount}
                          onChange={(e) => { setAmount(e.target.value) }} />
                        <p style={{ color: "red" }}>{amountErr}</p>
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="date"
                          format="DD-MM-YYYY"
                          placeholder="Enter Date"
                          value={expDate}
                          onChange={(e) => {
                            const selectedDate = e.target.value;
                            setExpDate(selectedDate)
                          }}

                        />
                        <p style={{ color: "red" }}>{dateErr}</p>
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Receiver Name "
                          value={receiverName}
                          onChange={(e) => { setReceiverName(e.target.value) }} />
                        <p style={{ color: "red" }}>{receiverErr}</p>
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Expenditure Detail "
                          value={detail}
                          onChange={(e) => { setDetail(e.target.value) }} />
                        <p style={{ color: "red" }}>{detailErr}</p>
                      </Form.Group>


                      <Form.Group className="mb-3" >
                        <Form.Select
                          onChange={(e) => {
                            const selectedstatus = e.target.value;
                            console.log()
                            setStatus(selectedstatus);
                            // alert(e.target.value);
                          }}
                        >


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

                      <Form.Group className="mb-3" >
                        <Form.Select
                          value={catlist.cat_id}
                          onChange={handleselectchange}>
                          <option>Select Category ID</option>
                          {
                            catlist.map((items, key) => {
                              return <>
                                {catId === items.catId ? <option selected key={key} value={items.catId}>{items.catName}</option> : <option key={key} value={items.catId}>{items.catName}</option>}</>

                            })}
                        </Form.Select>

                      </Form.Group>
                      <div style={{display:"flex", flexDirection:"row", margin:10}}>
                        <div>
                          {(() => {
                            if (id == null) {
                              return (
                                <div><Button variant="success" type="submit">
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
                        <div><Button variant="danger"style={{marginLeft:40}} onClick={() => {
                          setReceiptNo(""); setAmount(""); setReceiverName(""); setAmount(""); setDetail(""); setStatus("");setExpDate("")
                          setCatId(""); setId(0); setShowtable(true); setShowform(false);
                        }} >  Close</Button></div>
                      </div>
                      <div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            )
          }
          //form end 

          //show table code 
          else if (showtable) {
            return (
              <div style={{ overflow: "scroll" }}>

                <AdminMenuBar />


                <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', margin: 20, }}>
                  {/* <div>Total Expenditure{ total}</div> */}

                  <div><Button onClick={() => setShowform(true)} style={{ margin: 10 }}> Add Expenditure detail</Button></div>


                  <BeatLoader loading={loading} size={24} />

                  <div><Form.Select name="Select ID"
                    value={catlist.cat_id}
                    onChange={handleSelectedCat}>
                    <option>सभी खर्चे</option>
                    {
                      catlist.map((items, key) => {
                        return <option key={key} value={items.catId}>{items.catName}</option>;
                      })}
                  </Form.Select></div>

                </div>



                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

                  <Table style={{ borderStyle: "groove", }}>
                    <thead >
                      <tr>
                        <th>  Sr.No</th>
                        <th> Receipt No  </th>
                        <th> Expd. Amount  </th>
                        <th> Receiver Name  </th>
                        <th> Expd. Date  </th>
                        <th> Expd. Detail  </th>
                        <th> Receipt Photo  </th>
                        <th> Category Name  </th>

                        <th> Status  </th>
                        <th> Action  </th>

                      </tr>
                    </thead>

                    <tbody>
                      {

                        explist.map((data, index) => {


                          
                          {
                            total = total + data.expdAmount;

                            //setTotalExpenditure({data.expdAmount,...totalExpenditure});
                            //const total=(data.reduce((total,currentItem) =>  total = total + currentItem.expdAmount , 0 ))
                            // setTotalExpenditure(total);
                          }
                          return <tr key={index}>
                            {/* {setTotalExpenditure(total)} */}
                            <td>  {index + 1}  </td>
                            <td>  {data.expdReceiptNo}  </td>
                            <td>  {data.expdAmount}  </td>
                            <td>  {data.receiverName}  </td>
                            <td>  {data.expdDate}  </td>
                            <td>  {data.expdDetail}  </td>
                            <td>  {data.receipt}  </td>


                            <td>  {data.expenditureCatEntity.catName}  </td>
                            <td>
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
                            <td >
                              <div style={{ display: "flex", alignContent: "center", justifyContent: "center", }}>
                                <Button variant="warning" style={{ margin: 5 }}
                                  onClick={() => {

                                    setReceiptNo(data.expdReceiptNo);
                                    setAmount(data.expdAmount);
                                    setReceiverName(data.receiverName);
                                    setExpDate(data.expdDate);
                                    setDetail(data.expdDetail);
                                    setPhoto(data.receipt);
                                    setStatus(data.isActive);
                                    setCatId(data.expenditureCatEntity.catId);
                                    setId(data.expdId);
                                    setShowform(true);
                                    setShowtable(false);

                                  }}> <FaEdit /></Button>
                                <Button variant="success" onClick={() => { handleShow(data) }} style={{ margin: 5 }}><FaUpload /> </Button>

                                <form method="post" action={downloadReceipt} >
                                  <input type="hidden" name="expdNo" value={data.expdReceiptNo} />
                                  <div>
                                    {(() => {
                                      if (data.receiptPdf) {
                                        return (
                                          <div><Button variant="info" type="submit" style={{ margin: 5 }} ><FaDownload /></Button></div>
                                        )
                                      }

                                      else {
                                        return (
                                          <div><Button variant="light" type="submit" disabled ><FaDownload /></Button></div>
                                        )
                                      }
                                    })()}
                                  </div>

                                  {/* <Button variant="info" type="submit" ><FaDownload/></Button> */}
                                </form>


                              </div>

                            </td>
                          </tr>

                        })}


                    </tbody>
                    {/* {setTotalExpenditure({total})} */}
                    Total Expendirure:-<h4> {total}</h4>
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
export default AdminExpenditure;