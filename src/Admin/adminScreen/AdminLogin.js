import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { userAuthentication } from "../adminComponent/Admin_Api";

const Login = () => {



    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading]= useState(false)
    //set username and password
    // const user ="veer@teja.com";
    // const pass ="12345";
    const history = useHistory();



    const handleSubmit = (e) => {
        setLoading(true);
        axios.post(`${userAuthentication}`, { userId: username, userPassword: password }).then((resp) => {
            setLoading(true)
            //console.log(resp);
            if (resp.data === "success") {
                history.push("/admin_home")
            }
            else {
                alert("Your Username or Password is incorrect");
            }
        });
        e.preventDefault();
    }


    const handleUserChange = (u) => {
        setUsername(u.target.value)
    }

    const hadlePasswordChange = (p) => {
        setPassword(p.target.value)
    }

    return (
        <div style={{ backgroundColor: "aqua" }} >
            <h2 style={{ textAlign: "center" }}>Welcome To Admin Login Page!!</h2>
            
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                <BeatLoader loading={loading} size={24} />
            </div>

            <Form onSubmit={handleSubmit} style={{height:600}}>

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Your Username"
                        onChange={handleUserChange}
                        value={username}
                        style={{ backgroundColor: "#ff9999", color: "white" }} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder=" Enter Your Password"
                        value={password}
                        onChange={hadlePasswordChange}
                        style={{ backgroundColor: "#ff9999" }} />
                </Form.Group>
                <Form.Label>{ }</Form.Label>

                <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center" }}>
                    <Button variant="success" type="submit" >
                        Login
                    </Button>
                    {/* <Button variant="warning"  onClick={()=>localStorage.remove} >
                    Reset
                    </Button> */}
                </div>
            </Form>

        </div>
    )
}
export default Login;