import React, { useEffect, useState, useRef } from "react";
import Footer from "../Component/Footer";
import MenuBar from "../Component/MenuBar";
import MaterailTable from "material-table";
import { Form, Button, Modal, } from "react-bootstrap";
import Axios from "axios";
import { FaUpload, FaDownload } from "react-icons/fa";
import { BeatLoader } from "react-spinners"
import {
  getAllActiveExpenditures, getAllCategories,
  getExpenditureByCatId, totalExpenditure,
  totalExpenditureByCatId, downloadReceipt
} from "../Component/UserApi"


const Kharcha = () => {
  const [receiptNo, setReceiptNo] = useState("");
  const [kharchaList, setKharchaList] = useState([]);
  const [catList, setCatList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalExp, setTotalExp] = useState("");
  const formRef = useRef(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    setReceiptNo(event.expdReceiptNo);
  }


  //get all expenditure
  useEffect(() => {
    async function fetchData() {

      const response = await Axios.get(`${getAllActiveExpenditures}`);
      setKharchaList(response.data);

      const res = await Axios.get(`${getAllCategories}`);
      setCatList(res.data)
      setLoading(false);

      const resp = await Axios.get(`${totalExpenditure}`);
      setTotalExp(resp.data);

    }
    fetchData();
  }, []);

  const colom =
    [
      { title: "क्रम संख्या", field: "srNo", width: "25%" }, { title: "रशीद संख्या", field: "expdReceiptNo" },
      { title: "खर्च राशि", field: "expdAmount", type: "currency", currencySetting: { currencyCode: "INR" } },
      { title: "भुगतान प्राप्तकर्ता का नाम", field: "receiverName" }, { title: "खर्चा का विवरण", field: "expdDetail" },
      { title: "दिनांक", field: "expdStringDate" },
    ]

  var x = totalExp;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != '')
    lastThree = ',' + lastThree;
  var kulKharcha = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;



  const handleSelectedCat = async (e) => {
    if (e.target.value === "सभी खर्चे") {
      setLoading(true);
      await Axios.get(`${getAllActiveExpenditures}`)
        .then((resp) => {
          setKharchaList(resp.data);
          setLoading(false);


        })
    }
    setLoading(true);
    await Axios.post(`${getExpenditureByCatId}`, { catId: e.target.value })
      //alert(e.target.value);
      .then((resp) => {
        // console.log(`change cat id${resp.data}`)
        // console.log()
        setKharchaList(resp.data);
        setLoading(false);
      })

    Axios.post(`${totalExpenditureByCatId}`, { catId: e.target.value })
      .then((res) => {
        setTotalExp(res.data);

      })
  }






  const headerStyle = {
    display: "flex", justifyContent: "center",
    alignContent: "center", color: "green", fontSize: 26, margin: 20
  }
  const headerStyle1 = {
    display: "flex", justifyContent: "center",
    alignContent: "center", color: "blue", fontSize: 26, margin: 20
  }


  return (
    <div>
      <div>
        {/* Modal for Upload Receipt No */}
        <Modal show={show} onHide={handleClose} style={{ height: 400 }}>
          <Modal.Header closeButton>
            <Modal.Title>Receipt No-{receiptNo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="post" action={downloadReceipt} encType="multipart/form-data">


              <input type="hidden" name="expdNo" value={receiptNo} />
              <div style={{ display: "flex", justifyContent: 'space-around', alignContent: "center" }}>
                <Button variant="success" type="submit" onClick={() => setShow(false)} >
                  Download Receipt </Button>



              </div>

            </form>
          </Modal.Body>
          {/* <Modal.Footer>
           <Button variant="danger" onClick={handleClose}>  Close </Button>
           </Modal.Footer> */}
        </Modal>
      </div>
      <MenuBar />
      <div style={{ display: 'flex', flexDirection: "row", justifyContent: "center",flexWrap:"wrap", alignItems: 'center', margin: 20 }}>
        <div >
        <div>
        <h3 style={headerStyle} >कुल खर्चा </h3>
        <h3 style={headerStyle1} > {kulKharcha}</h3>
        </div>
        
        <h3 style={headerStyle} >श्रेणीवार खर्चा </h3>

        <div>
          <Form.Select
            value={catList.cat_id}
            onChange={handleSelectedCat}>
            <option>सभी खर्चे</option>
            {
              catList.map((items, key) => {
                return <option key={key} value={items.catId}>{items.catName}</option>;
              })}
          </Form.Select></div>

      </div>
        </div>
        

      <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <BeatLoader loading={loading} size={24} />
      </div>

      <MaterailTable
        title=""
        data={kharchaList}
        columns={colom}
        options={{
          exportButton: true,
          searchFieldAlignment: "right",
          paginationType: "stepped", exportAllData: true,
          sorting: true, actionsColumnIndex: -1, searchFieldVariant: "outlined",
          pageSizeOptions: [20, 30, 50, 100], pageSize: 20,
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF', fontSize: 20
          },

        }}

        actions={[
          {
            icon: () =>
              <Button variant="info"  ><FaDownload /></Button>
            ,
            tooltip: "Download Expenditure Image",
            onClick: (e, data) => {

              <div>
                {(() => {
                  if (data.receiptPdf) {
                    { handleShow(data) }

                  }

                  else {
                    return (
                      alert("Image not found")
                    )
                  }
                })()}
              </div>

              {/* <Button variant="info" type="submit" ><FaDownload/></Button> */ }

            }



          }

        ]}
      />

      <Footer />

    </div>
  )
}
export default Kharcha;