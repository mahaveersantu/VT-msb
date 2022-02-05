import React,{useEffect} from "react";
import { Navbar } from "react-bootstrap";

const DateAndTime=()=>{

const [time, setTime] = React.useState(new Date());

  useEffect(() => {
    setInterval(() => {
     setTime(new Date());
    }, 1000);
  }, []);
   

    return(
            <Navbar  bg="success" variant="dark" style={{height:20, color:"white", fontSize:20,display:"flex", justifyContent:"right", alignContent:"center"}}>
                <div style={{padding:10,}}>
                {/* {`${day}-${month}- ${year}`} */}
                {/* {`Date: ${date}  Time:${time}`} */}
                {time.toLocaleString()}
                </div>
            </Navbar>
        
    )
}
export default DateAndTime;