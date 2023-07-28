import React from "react";
import "../App.css";
import HeroProject_3 from "../components/hero_proj3.js";
import NavbarProject from "../components/Navbar_project";
import ContentP3 from "../components/content_proj3";
import InfoProj3 from "../components/infoProj3";
import Contactos from "../components/Contactos";
import InfoProj3_2 from "../components/infoProj3_2";
const Project_3 = ()=> {


    return(
        <div>
           <NavbarProject/> 
           <HeroProject_3/>
           <ContentP3/>
           <InfoProj3/>
           <InfoProj3_2/>
           <Contactos/>
   
        </div>
    )
}

export default Project_3





