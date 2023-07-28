import React from "react";
import setaBack from '../assets/Arrow 1 (1).png'
import { useNavigate } from "react-router-dom";
import "../App.css";

const HeroProject_3 = ()=> {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(

<div className="titulo_proj">
<header className="header_proj3">
    <div onClick={goBack} className="seta_rounded">
    <img className="seta_back_projects" src={setaBack}/></div>
    {/* <h1>Submerso </h1> */}
</header>

</div>
    )
}

export default HeroProject_3





