import React from "react";
import "../App.css";
// import HeroProject4 from "../components/hero_proj4.js";
import NavbarProjectToCare from "../components/Navbar_projectToCare.js";
import ContentP5 from "../components/content_proj5.js";
import InfoProj5 from "../components/infoProj5.js";
import ContactosToCare from "../components/ContactosToCare.js";
import InfoProj42 from "../components/infoProj4_2.js";
import InfoProj5DesignProcess from "../components/infoProj5_DesignProcess.js";
// import InfoProj44 from "../components/infoProj4_4.js";
import InfoProj5Wireframes from "../components/infoProj5_Wireframes.js";
const Project5 = ()=> {


    return(
        <div>
           <NavbarProjectToCare/> 
           {/* <HeroProject4/> */}
           <ContentP5/>
            <InfoProj5/>
          <InfoProj42/>
          <InfoProj5DesignProcess/>
          {/* <InfoProj44/> */}
          <InfoProj5Wireframes/>
           <ContactosToCare/>
   
        </div>
    )
}

export default Project5





