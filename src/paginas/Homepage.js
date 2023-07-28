import React from "react";
import Navbar from "../components/Navbar";
import Introduction from "../components/IntroductionVisaoGeral";
import HeroHomepage from "../components/heroHomepage";
import ProjectsHomePage from "../components/ProjectsHomepage";
import Contactos from "../components/Contactos";
import Footer from "../components/Footer";
import "../App.css";

const Homepage = ()=> {


    return(
        <div>
<Navbar/>
<HeroHomepage/>
<Introduction/>
<ProjectsHomePage/>
<Contactos/>
{/* <Footer/> */}
        </div>
    )
}

export default Homepage
