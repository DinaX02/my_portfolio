import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../App.css";

const PercursoAcademico = () => {
  return (
    <div id="percurso">
      <p id="projetos" className="introduction">
        A nível Educacional{" "}
      </p>
      <h1 className="big_title">Percurso Académico.</h1>

   {/*    <div className="timeline">

        <div className="container_timeline left-container">
         <img src={imgTimeline}/>   
          <div className="text_box_timeline">
            <h2>Artes</h2>
            <p>Ensino Secundário</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container_timeline right-container">
        <img src={imgTimeline}/>  
          <div className="text_box_timeline">
            <h2>Web Design</h2>
            <p>Primeiro contacto com UX/UI Design</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        
        <div className="container_timeline left-container">
        <img src={imgTimeline}/>  
          <div className="text_box_timeline">
            <h2>Desenvolvimento Web</h2>
            <p>Primeiro contacto com HTML / CSS / Bootstrap</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        
        <div className="container_timeline right-container">
        <img src={imgTimeline}/>  
          <div className="text_box_timeline">
            <h2>Desenvolvimento Web - Programação</h2>
            <p>Primeiro contacto com JavaScript</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container_timeline left-container">
        <img src={imgTimeline}/>  
          <div className="text_box_timeline">
            <h2>Ambientes 3D</h2>
            <p>Primeiro contacto com Unity3D e Blender</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container_timeline right-container">
        <img src={imgTimeline}/>  
          <div className="text_box_timeline">
            <h2>Desenvolvimento Web - Programação</h2>
            <p>Primeiro contacto com React js</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        
        <div className="container_timeline left-container">
        <img src={imgTimeline}/>  
          <div className="text_box_timeline">
          <h2>Desenvolvimento Web - Programação</h2>
            <p>Primeiro contacto com React Native</p>
            <span className="left-container-arrow"></span>
        </div>
        
        
        
      </div>


</div>*/}
<VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:"#5331B2", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5331B2" }}
        iconStyle={{ background:"#5331B2", color: "#fff" }}
        icon={<i className="fas fa-palette"></i>}
      >
        <h3 className="vertical-timeline-element-title">Artes</h3>
        <p>Ensino Secundário.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:"#5331B2", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5331B2" }}
        iconStyle={{ background:"#5331B2", color: "#fff" }}
        icon={<i className="fas fa-paint-brush"></i>}
      >
        <h3 className="vertical-timeline-element-title">Web Design</h3>
        <p>Experiências iniciais com design de interfaces e experiência do utilizador.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:"#5331B2", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5331B2" }}
        iconStyle={{ background:"#5331B2", color: "#fff" }}
        icon={<i className="fab fa-html5"></i>}
      >
        <h3 className="vertical-timeline-element-title">Desenvolvimento Web</h3>
        <p>Primeiro contacto com HTML, CSS e Bootstrap.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:"#5331B2", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5331B2" }}
        iconStyle={{ background:"#5331B2", color: "#fff" }}
        icon={<i className="fab fa-js-square"></i>}
      >
        <h3 className="vertical-timeline-element-title">Desenvolvimento Web - Programação</h3>
        <p>Primeiro cont com JavaScript.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:"#5331B2", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5331B2" }}
        iconStyle={{ background:"#5331B2", color: "#fff" }}
        icon={<i className="fab fa-js-square"></i>}
      >
        <h3 className="vertical-timeline-element-title">Ambients 3D</h3>
        <p>Prineiro contacto com Unity3D e Blender.</p>
      </VerticalTimelineElement>
 
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:"#5331B2", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5331B2" }}
    iconStyle={{ background:"#5331B2", color: "#fff" }}
        icon={<i className="fab fa-js-square"></i>}
      >
        <h3 className="vertical-timeline-element-title">Desenvolvimento Web - Programação</h3>
        <p>Primeiro contacto com React js.</p>
      </VerticalTimelineElement>
       
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:"#5331B2", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5331B2" }}
        iconStyle={{ background:"#5331B2", color: "#fff" }}
        icon={<i className="fab fa-js-square"></i>}
      >
        <h3 className="vertical-timeline-element-title">Desenvolvimento Web - Programação</h3>
        <p>Primeiro contacto com React Native.</p>
      </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
};

export default PercursoAcademico;
