import React, { useState, useEffect } from "react";
import AdminMenuBar from "../adminComponent/Admin_MenuBar";
import { Form, Button, Table } from "react-bootstrap";
import Axios from "axios";
import { BeatLoader } from "react-spinners";
import { getAllcategories, saveAndUpdateCategory } from "../adminComponent/Admin_Api"



const AdminExpenditureCat = () => {
  const [category, setCategory] = useState("");
  const [showform, setShowform] = useState(false);
  const [showtable, setShowtable] = useState(true);
  const [id, setId] = useState(0);
  const [catlist, setCatlist] = useState([]);
  const [catError, setCatError] = useState("");
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   // alert("get all api called ")
  //   Axios.get(`${getAllcategories}`)
  //     .then((resp) => {
  //       setCatlist(resp.data);

  //       //console.log(resp.data);
  //       //console.log(catlist);
  //     })
  // }, [])

  useEffect(() => {
    async function fetchData() {

      const response = await Axios.get(`${getAllcategories}`);
      setCatlist(response.data);
      setLoading(false)

    }
    fetchData();
  }, []);

  function validate() {
    if (category == "") {
      setCatError("Enter name of category ");
    }
    else {
      return true;
    }
  }

  const hadleSubmit = async (e) => {
    setCatError("");
    if (validate()) {
      const data = { catName: category, catId: id };
      await Axios.post(`${saveAndUpdateCategory}`, { catName: category, catId: id }).then((resp) => {
        console.log(resp);
        if (resp.data = "success") {
          alert("Data saved sucess")
        }
        else if (resp.data = "fail") {
          alert("Some thing was wrong")
        }
      });

    }
    // e.preventDefault();
  }


  return (
    <div>
      {(() => {
        if (showform) {
          return (
            <div>
              <AdminMenuBar />
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "ActiveCaption" }}>
                <div style={{ height: 150, width: 500, margin: 30, borderColor: '#ccc', borderWidth: 1 }}>
                  <Form onSubmit={hadleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label> Add Category Name</Form.Label>



                      <Form.Control
                        type="input"
                        placeholder="Enter Category"
                        value={category}
                        onChange={(e) => { setCategory(e.target.value) }}
                      />
                      <p style={{ color: "red" }}>{catError}</p>
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
                  </Form>
                </div>
              </div>
            </div>
          )
        }
        else if (showtable) {
          return (
            <div>
              <AdminMenuBar />

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                <Button onClick={() => setShowform(true)} style={{ margin: 10 }}> Add Category</Button>   </div>

              <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                <BeatLoader loading={loading} size={24} />
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

                <Table style={{ borderStyle: "groove", }}>
                  <thead >
                    <tr>
                      <th>  Cat_Id </th>
                      <th> Cat_Name   </th>
                      <th> Action   </th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      catlist.map((data, index) => {

                        return <tr key={index}>
                          <td>  {index + 1}  </td>
                          <td>  {data.catName}  </td>
                          <td>
                            <Button
                              onClick={() => {

                                setCategory(data.catName);
                                setId(data.catId);
                                setShowform(true);
                                setShowtable(false);

                              }}> Edit</Button>
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
  )
}
export default AdminExpenditureCat;