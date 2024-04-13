import React from "react";
import "../App.css";
import boomerangMockupOverview from "../assets/mockup_overview_boomerang_2.png"



const InfoProj4_2 = ()=> {
    return(

<div className="info_p4">
{/* <div className="title-with-marker">
<p className="big_title">Overview.</p> 

</div>*/}

<div className="instagram-container">

<div className="instagram-info">
<p className="paragrafo_intro_sizes">Problemática</p> 
<p className="fontsize_tags"><span className="title_marcado_boomerang">Solução.</span></p>
<p className="paragrafo_origens">Que necessidades existem e como podemos satisfazê-las?
</p>
        
</div>


<div className="other-info">
<img className="img_vision" src={boomerangMockupOverview} alt="Boomerang mockup  overview"/>
</div>
</div>  
</div>

    )
}   

export default InfoProj4_2





