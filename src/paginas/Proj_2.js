import React from "react";
import HeroProject_2 from "../components/hero_proj2";
import ContentP2 from "../components/content_proj2";
import InfoProj2 from "../components/infoProj2";
import Footer from "../components/Footer";
import "../App.css";
import NavbarAbout from "../components/Navbar_about";

const Project_2 = ()=> {


    return(
        <div>
            <NavbarAbout />
            <HeroProject_2/>
            <ContentP2/>
            <InfoProj2/>
            <Footer/>
        </div>
    )
}

export default Project_2





