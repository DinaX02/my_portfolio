import React from "react";
import HeroProject_2 from "../components/hero_proj2";
import ContentP2 from "../components/content_proj2";
import InfoProj2 from "../components/infoProj2";
import Footer from "../components/Footer";
import "../App.css";
import Contactos from "../components/Contactos";
import NavbarProject from "../components/Navbar_project";

const Project_2 = ()=> {


    return(
        <div>
            <NavbarProject />
            <HeroProject_2/>
            <ContentP2/>
            <InfoProj2/>
            <Contactos/>
            {/* <Footer/> */}
        </div>
    )
}

export default Project_2





