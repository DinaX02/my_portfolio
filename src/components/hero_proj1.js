import React from "react";
import { FiArrowLeft } from "react-icons/fi";
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
    <button type="button" onClick={goBack} className="seta_rounded" aria-label="Voltar à página anterior">
    <FiArrowLeft className="seta_back_projects" aria-hidden="true" /></button>
    {/* <h1>Koru Mobile App </h1> */}
</header>
{/* <img className="background_proj" src={BackgroundKORU} /> */}
</div>
    )
}

export default HeroProject_1





