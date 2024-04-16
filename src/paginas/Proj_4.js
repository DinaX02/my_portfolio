import React from "react";
import "../App.css";
// import HeroProject4 from "../components/hero_proj4.js";
import NavbarProjectBoomerang from "../components/Navbar_projectBoomerang.js";
import ContentP4 from "../components/content_proj4.js";
import InfoProj4 from "../components/infoProj4.js";
import ContactosBoomerang from "../components/ContactosBoomerang.js";
import InfoProj42 from "../components/infoProj4_2.js";
import InfoProj43 from "../components/infoProj4_3.js";
import InfoProj44 from "../components/infoProj4_4.js";
const Project_4 = ()=> {


    return(
        <div>
           <NavbarProjectBoomerang/> 
           {/* <HeroProject4/> */}
           <ContentP4/>
            <InfoProj4/>
          <InfoProj42/>
          <InfoProj43/>
          <InfoProj44/>
           <ContactosBoomerang/>
   
        </div>
    )
}

export default Project_4





