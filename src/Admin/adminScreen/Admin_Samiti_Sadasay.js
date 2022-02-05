import React, { useState, useEffect } from "react";
import AdminMenuBar from "../adminComponent/Admin_MenuBar";
import { Form, Button, Table } from "react-bootstrap";
import Axios from "axios";
import { BeatLoader } from "react-spinners";
import { getAllSamitiMembers, saveAndUpdateSamitiMember } from "../adminComponent/Admin_Api"



const AdminSamitiSadasay = () => {


    const [memberName, setMemberName] = useState("");
    const [designation, setDesignation] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [priority, setPriority] = useState("");
    const [id, setId] = useState();
    const [memberList, seMemberList] = useState([]);
    const [showform, setShowform] = useState(false);
    const [showtable, setShowtable] = useState(true);
    const [loading, setLoading]= useState(true)

    const [nameErr, setNameErr] = useState("");
    const [degErr, setDegErr] = useState("");
    const [mobileErr, setMobileErr] = useState("");
    const [addressErr, setAddressErr] = useState("");
    const [priorityErr, setPriorityErr] = useState("");

    // useEffect(() => {
    //     Axios.get(`${getAllSamitiMembers}`)
    //       .then((resp) => {
    //         seMemberList(resp.data);
    //         //   console.log(resp.data);
    //         //  console.log(explist);
    //       })
    //   }, [])

    useEffect(() => {
        async function fetchData() {
            
            const response = await Axios.get(`${getAllSamitiMembers}`);
            seMemberList(response.data)
            setLoading(false);
        }
        fetchData();
    }, []);


    function validate() {

        if (memberName === "" && address === "" && designation === "" && mobile === "" && priority === "") {
            setNameErr("Please Enter Name"); setDegErr("Enter Designation");
            setAddressErr("Please Enter Address"); setMobileErr("Enter Mobile No.");
            setPriorityErr("Enter Priority");
        }
        else if (memberName === "") { setNameErr("Please Enter Name"); }
        else if (address === "") { setAddressErr("Please Enter Address"); }
        else if (mobile === "" || mobile.length !== 10) { setMobileErr("Please Enter mobile No. or Should be 10 digit"); }
        else if (designation === "") { setDegErr("Please Enter Designation"); }
        else if (priority === "") { setPriorityErr("Please Enter Priority"); }
        else {

            return true;
        }
    }
    const handleSubmit = async (e) => {
        //  alert("form submit")
        setNameErr(""); setAddressErr(""); setMobileErr(""); setDegErr(""); setPriorityErr("");

        if (validate()) {
            // alert("validation done")
            // console.log(memberName,address,designation,mobile,priority)
            await Axios.post(`${saveAndUpdateSamitiMember}`, {
                id: id,
                memberName: memberName,
                memberAddress: address,
                memberDesig: designation,
                memberMobile: mobile,
                memberPriority: priority,

            })
                .then((resp) => {

                    // console.log(resp);
                    if (resp.data === "success") {
                        alert("Member saved  sucessfully");
                    }
                    else if (resp.data === "fail") {
                        alert("something was wrong")
                    }
                })
        }


        //e.preventDefault(); 

    }
    return (

        <div>
            {(() => {
                if (showform) {
                    return (
                        <div>
                            <AdminMenuBar />
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "ActiveCaption" }}>
                                <div style={{ height: 550, width: 500, margin: 30, borderColor: '#ccc', borderWidth: 1 }}>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label> Add Samiti Member Name</Form.Label>
                                            <Form.Control
                                                type="input"
                                                placeholder="Enter Samiti Member Name"
                                                value={memberName}
                                                onChange={(e) => { setMemberName(e.target.value) }} />
                                            <p style={{ color: "red" }}>{nameErr}</p>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control
                                                type="input"
                                                placeholder="Enter Address"
                                                value={address}
                                                onChange={(e) => { setAddress(e.target.value) }} />
                                            <p style={{ color: "red" }}>{addressErr}</p>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control
                                                type="input"
                                                placeholder="Enter Name of Designation"
                                                value={designation}
                                                onChange={(e) => { setDesignation(e.target.value) }} />
                                            <p style={{ color: "red" }}>{degErr}</p>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control
                                                type="input"
                                                placeholder="Enter Mobile No"
                                                value={mobile}
                                                onChange={(e) => { setMobile(e.target.value) }} />
                                            <p style={{ color: "red" }}>{mobileErr}</p>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control
                                                type="input"
                                                placeholder="Enter Member Priority"
                                                value={priority}
                                                onChange={(e) => { setPriority(e.target.value) }} />
                                            <p style={{ color: "red" }}>{priorityErr}</p>
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
                                <Button onClick={() => setShowform(true)} style={{ margin: 10 }}> Add Samiti Member</Button>   </div>

                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                <BeatLoader loading={loading} size={24} />
                            </div>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

                                <Table style={{ borderStyle: "groove", }}>
                                    <thead >
                                        <tr>
                                            <th>  Sr.No </th>
                                            <th>  Member Name   </th>
                                            <th> Address   </th>
                                            <th> Designation   </th>
                                            <th>  Mobile No.    </th>
                                            <th>  Member Priority   </th>
                                            <th> Action   </th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            memberList.map((data, index) => {

                                                return <tr key={index}>
                                                    <td>  {index + 1}  </td>
                                                    <td>  {data.memberName}  </td>
                                                    <td>  {data.memberAddress}  </td>
                                                    <td>  {data.memberDesig}  </td>
                                                    <td>  {data.memberMobile}  </td>
                                                    <td>  {data.memberPriority}  </td>

                                                    <td>
                                                        <Button
                                                            onClick={() => {

                                                                setMemberName(data.memberName);
                                                                setAddress(data.memberAddress)
                                                                setDesignation(data.memberDesig);
                                                                setMobile(data.memberMobile);
                                                                setPriority(data.memberPriority)
                                                                setId(data.id);
                                                                setShowtable(false);
                                                                setShowform(true);
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
export default AdminSamitiSadasay;