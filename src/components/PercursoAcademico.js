import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../App.css";


const PercursoAcademico = () => {
  const linhaStyle = {
    marginTop:20,
    width: '200px',
    height: '5px',
    backgroundColor: '#A767FB',
    position:"absolute",
    right: '0',
  };

  const numeroStyle = {
    marginTop:5,
    position:"absolute",
    right: '15px',
    color: '#A767FB',
    fontSize: '46px',
    fontWeight: 'bold',
  };

  return (
    <div id="percurso" className="spAce_timelinne">

<div className="linhasss_roxos">
      <div style={linhaStyle}>
        <p style={numeroStyle}>02</p>
      </div>
      </div>

      <p id="projetos" className="introduction">
        A nível Educacional{" "}
      </p>
      <div className="title-with-marker">
    

    <h1 className="big_title">Percurso Académico.</h1>
    </div>
{/* <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:"#5331B2", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5331B2" }}
        iconStyle={{ background:"#5331B2", color: "#fff" }}
        icon={<i className="fas fa-palette"></i>}
      >
        <h3 className="vertical-timeline-element-title">Artes</h3>
        <p>Ensino Secundário.</p>
        <small>2017-2020</small>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:"#5331B2", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5331B2" }}
        iconStyle={{ background:"#5331B2", color: "#fff" }}
        icon={<i className="fas fa-paint-brush"></i>}
      >
        <h3 className="vertical-timeline-element-title">Web Design</h3>
        <p>Primeiro contacto com design de interfaces e experiência do utilizador.</p>
        <small>2020</small>
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
        <small>2021</small>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:"#5331B2", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5331B2" }}
        iconStyle={{ background:"#5331B2", color: "#fff" }}
        icon={<i className="fab fa-js-square"></i>}
      >
        <h3 className="vertical-timeline-element-title">Desenvolvimento Web - Programação</h3>
        <p>Primeiro contacto com JavaScript.</p>
        <small>2021</small>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background:"#5331B2", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5331B2" }}
        iconStyle={{ background:"#5331B2", color: "#fff" }}
        icon={<i className="fab fa-js-square"></i>}
      >
        <h3 className="vertical-timeline-element-title">Ambients 3D</h3>
        <p>Primeiro contacto com Unity3D e Blender.</p>
        <small>2022</small>
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
        <small>2022</small>
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
        <small>2023</small>
      </VerticalTimelineElement>

      </VerticalTimeline> */}
      
    </div>
  );
};

export default PercursoAcademico;
