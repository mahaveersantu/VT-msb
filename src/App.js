import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch,} from "react-router-dom"
import Home from "./Screen/Home";
import SamitiSadasay from "./Screen/SamitiSadasay";
import SamitiUddeshay from "./Screen/SamitiUddeshay";
import ArthikSahyog from "./Screen/ArthikSahyog";
import GaiArthikSahyog from "./Screen/GairArthikSahyog";
import Kharcha from "./Screen/Kharcha";
import Gallary from "./Screen/Gallary";
import HamareBareMai from "./Screen/HamareBareMai";


import Login from "./Admin/adminScreen/AdminLogin"
import AdminHome from "./Admin/adminScreen/Admin_Home";
import AdminSamitiSadasay from "./Admin/adminScreen/Admin_Samiti_Sadasay";
import AdminSamitiUddeshay from "./Admin/adminScreen/Admin_Samiti_Uddeshay";
import AdminArthikSahyog from "./Admin/adminScreen/Admin_Arthik_Sahyog";
import AdminGairArthikSahyog from "./Admin/adminScreen/Admin_GairArthik_Sahyog";
import AdminKharcha from "./Admin/adminScreen/Admin_Kharcha";
import AdminGallary from "./Admin/adminScreen/Admin_Gallary";
import AdminAbout from "./Admin/adminScreen/Admin_About";
import AdminExpenditureCat from "./Admin/adminScreen/Admin_Expd_Cat";
import AdminExpenditure from "./Admin/adminScreen/AdminExpenditure";


function App() {
  return (
    <div>
      {/* for material table icon  */}
      <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/samiti_Uddeshay" component={SamitiUddeshay}/>
        <Route exact path="/samiti_Sadasay" component={SamitiSadasay}/>
        <Route exact path="/arthik_Sahyog" component={ArthikSahyog}/>
        <Route exact path="/gaiArthik_Sahyog" component={GaiArthikSahyog}/>
        <Route exact path="/kharcha" component={Kharcha}/>
        <Route exact path="/gallary" component={Gallary}/>
        <Route exact path="/about" component={HamareBareMai}/>

        <Route exact path="/admin_home" component={AdminHome}/>
        <Route exact path="/admin_samiti_Uddeshay" component={AdminSamitiUddeshay}/>
        <Route exact path="/admin_samiti_Sadasay" component={AdminSamitiSadasay}/>
        <Route exact path="/admin_arthik_Sahyog" component={AdminArthikSahyog}/>
        <Route exact path="/admin_gaiArthik_Sahyog" component={AdminGairArthikSahyog}/>
        <Route exact path="/admin_kharcha" component={AdminKharcha}/>
        <Route exact path="/admin_expd_cat" component={AdminExpenditureCat}/>
        <Route exact path ="/admin_manage_expenditure" component ={AdminExpenditure}/>
        
        <Route exact path="/admin_gallary" component={AdminGallary}/>
        <Route exact path="/admin_about" component={AdminAbout}/>
        <Route exact path="/adminlogin" component={Login}/>
       
        
        </Switch>
         
          


     
    </div>
  );
}

export default App;
