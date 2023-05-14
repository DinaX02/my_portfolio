import React from "react";
import BackgroundKORU  from '../assets/background cover koru app (2).png';
import setaBack from '../assets/arrow_back_proj.svg'
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

const HeroProject_1 = ()=> {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(

<div className="titulo_proj">
<header className="header_proj1">
    <div onClick={goBack} className="seta_rounded">
    <img className="seta_back_projects" src={setaBack}/></div>
    <h1>Koru Mobile App </h1>
</header>
<img className="background_proj" src={BackgroundKORU} />
</div>
    )
}

export default HeroProject_1





