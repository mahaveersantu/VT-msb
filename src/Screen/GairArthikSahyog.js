import React, { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import MenuBar from "../Component/MenuBar";
import MaterailTable from "material-table";
import Axios from "axios";
import {BeatLoader} from "react-spinners";
import { getAllActiveGairAarthikSahyog } from "../Component/UserApi";


const GaiArthikSahyog = () => {

  const [gairArthikList, setGairArthikList] = useState([]);
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //     Axios.get(`${getAllActiveGairAarthikSahyog}`)
  //       .then((resp) => {
  //         setGairArthikList(resp.data);
  //         //   console.log(resp.data);
  //         //  console.log(explist);
  //       })
  //   }, [])

  useEffect(() => {
    async function fetchData() {
     
      const response = await Axios.get(`${getAllActiveGairAarthikSahyog}`);
      setGairArthikList(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);
  // const data =[
  //     {serial_No:"1",name:"श्री सीताराम सुंडा पुत्र श्री कुन्दन मल सुंडा", detail:"kuch bhi"},
  //     ];
  const colom = [{ title: "क्रम संख्या", field: "srNo", width: "25%" },
  { title: "सहयोग कर्ता का नाम", field: "name" }, { title: "सहयोग कर्ता का पता", field: "address" },
  { title: "मोबाइल न.", field: "mobile" }, { title: "सहयोग का विवरण", field: "sahyogDetail" },
  ]

  return (
    <div>
      <MenuBar />
      <h1 style={{ display: "flex", justifyContent: "center", alignContent: "center", color: "green", fontSize: 26, margin: 50 }}>गैर आर्थिक सहयोग </h1>


      <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <BeatLoader loading={loading} size={24} />
      </div>

      <MaterailTable
        title=""
        data={gairArthikList}
        columns={colom}
        options={{
          exportButton: true,exportAllData:true,
          actionsColumnIndex:-1,searchFieldVariant:"outlined",
          sorting: true,
          pageSize:20, pageSizeOptions:[20,30,50,100],
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF', fontSize: 20
          },

        }}
      />

      <Footer />

    </div>
  )
}
export default GaiArthikSahyog;