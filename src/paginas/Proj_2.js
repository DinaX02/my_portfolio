import React from "react";
import HeroProject2 from "../components/hero_proj2";
import ContentP2 from "../components/content_proj2";
import InfoProj2 from "../components/infoProj2";
import "../App.css";
import Contactos from "../components/Contactos";
import InfoProj22 from "../components/infoProj2_2";
import NavbarProject from "../components/Navbar_project";

const Project_2 = ()=> {


    return(
        <div>
            <NavbarProject />
            <HeroProject2/>
            <ContentP2/>
            <InfoProj2/>
            <InfoProj22/>
            <Contactos/>
        </div>
    )
}

export default Project_2





