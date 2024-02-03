import React from "react";
import "../App.css";
import HeroProject3 from "../components/hero_proj3.js";
import NavbarProject from "../components/Navbar_project";
import ContentP3 from "../components/content_proj3";
import InfoProj3 from "../components/infoProj3";
import Contactos from "../components/Contactos";
import InfoProj32 from "../components/infoProj3_2";
const Project_3 = ()=> {


    return(
        <div>
           <NavbarProject/> 
           <HeroProject3/>
           <ContentP3/>
           <InfoProj3/>
           <InfoProj32/>
           <Contactos/>
   
        </div>
    )
}

export default Project_3





