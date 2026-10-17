import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../App.css";

const HeroProject4 = ()=> {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(

<div className="titulo_proj">
<header className="header_proj3">
    <button type="button" onClick={goBack} className="seta_rounded" aria-label="Voltar à página anterior">
    <FiArrowLeft className="seta_back_projects" aria-hidden="true" /></button>
    {/* <h1>Submerso </h1> */}
</header>

</div>
    )
}

export default HeroProject4





