import React from "react";
import Navbar from "../components/Navbar";
import Introduction from "../components/IntroductionVisaoGeral";
import HeroHomepage from "../components/heroHomepage";
import ProjectsHomePage from "../components/ProjectsHomepage";
import "../App.css";

const Homepage = ()=> {


    return(
        <div>
<Navbar/>
<HeroHomepage/>
<Introduction/>
<ProjectsHomePage/>
        </div>
    )
}

export default Homepage
