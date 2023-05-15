import React from "react";
import "../App.css";
import HeroProject_3 from "../components/hero_proj3.js";
import NavbarAbout from "../components/Navbar_about";
import ContentP3 from "../components/content_proj3";
import InfoProj3 from "../components/infoProj3";
import Footer from "../components/Footer";
const Project_3 = ()=> {


    return(
        <div>
           <NavbarAbout/> 
           <HeroProject_3/>
           <ContentP3/>
           <InfoProj3/>
           <Footer/>
        </div>
    )
}

export default Project_3





