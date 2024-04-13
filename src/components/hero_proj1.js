import React from "react";
import setaBack from '../assets/Arrow 1 (1).svg'
import {useNavigate } from "react-router-dom";
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
    <img className="seta_back_projects" src={setaBack} alt="goBackArrow"/></div>
    {/* <h1>Koru Mobile App </h1> */}
</header>
{/* <img className="background_proj" src={BackgroundKORU} /> */}
</div>
    )
}

export default HeroProject_1





