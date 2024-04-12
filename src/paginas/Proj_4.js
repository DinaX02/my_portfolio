import React from "react";
import "../App.css";
import HeroProject4 from "../components/hero_proj4.js";
import NavbarProject from "../components/Navbar_project.js";
import ContentP4 from "../components/content_proj4.js";
import InfoProj4 from "../components/infoProj4.js";
import Contactos from "../components/Contactos.js";
// import InfoProj32 from "../components/infoProj3_2.js";
const Project_4 = ()=> {


    return(
        <div>
           <NavbarProject/> 
           {/* <HeroProject4/> */}
           <ContentP4/>
            <InfoProj4/>
          {/* <InfoProj32/> */}
           <Contactos/>
   
        </div>
    )
}

export default Project_4





