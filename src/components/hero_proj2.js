import React from "react";
import BackgroundZetflicks from "../assets/hero_zetflicksss.png";
import setaBack from '../assets/arrow_back_proj.svg'
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

const HeroProject_2 = ()=> {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(

<div className="titulo_proj">
<header className="header_proj2">
    <div onClick={goBack} className="seta_rounded">
    <img className="seta_back_projects" src={setaBack}/></div>
    <h1>Zetflicks </h1>
</header>
<img className="background_proj" src={BackgroundZetflicks} />
</div>
    )
}

export default HeroProject_2





