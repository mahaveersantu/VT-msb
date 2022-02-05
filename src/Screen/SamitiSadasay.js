import React, { useState , useEffect } from "react";
import MaterailTable from "material-table";
import Axios from "axios";

import Footer from "../Component/Footer";
import MenuBar from "../Component/MenuBar";
import {BeatLoader}from "react-spinners";
import {getAllActiveSamitiMembers} from "../Component/UserApi";




const SamitiSadasay=()=>
{
    const [memberList, setmemberList]= useState([]);
    const [loading,setLoading]= useState(true)

    // useEffect(  ()=>{
    //     Axios.get(`${getAllActiveSamitiMembers}`)
    //     .then((resp)=>{
    //         setmemberList(resp.data);
    //         // console.log(resp.data);
    //         //console.log(kharchaList)
    //     }
    //     )
    // },[])

    // useEffect(  async ()=>{
    //     const response = await Axios.get(`${getAllActiveSamitiMembers}`)
    //         setmemberList(response.data);
    //         // console.log(resp.data);
    //         //console.log(kharchaList)
    //     // }
    //     // )
    // },[])

    

    useEffect(() => {
        async function fetchData() {
         
          const response = await Axios.get(`${getAllActiveSamitiMembers}`);
          setmemberList(response.data)
          setLoading(false)
        }
        fetchData();
      }, []); 
    
    
    const colom =[{title:"क्रम संख्या", field:"srNo", width:"25%"}, {title:"सदस्य नाम", field:"memberName"},{title:"सदस्य पता", field:"memberAddress"}, {title :"पद", field:"memberDesig"},{title :"मोबाइल न.", field:"memberMobile"}, ]
    
    
    return(
        <div>
             <MenuBar/>
             <h1 style={{textAlign:"center", color:"white", padding:10, backgroundColor:"#01579b"}}>चिन्दडी श्री वीर तेजाजी मंदिर विकास ट्रस्ट सदस्य सूची</h1>
            {/* <h2>{getAllActiveSamitiMembers}</h2> */}
            <div >
                    <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
                      <BeatLoader loading={loading} size={24}/>
                      </div>  

             <MaterailTable
             style={{margin:20}}
             title =""
             data={memberList}
             columns={colom}
             options={{
                exportButton: true,exportAllData:true,
                actionsColumnIndex:-1,searchFieldVariant:"outlined",
                pageSizeOptions:[5,10,20,30,50],pageSize:20,
                sorting:true,
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF', fontSize:20},
                    
              }}
             />
             </div>
           <Footer/>
        </div>
    )
}
export default SamitiSadasay;