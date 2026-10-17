import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import Reveal from "./Reveal";
import "../App.css";

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
`;

const ButtonPlanoCurricular = styled.a`
  display: inline-block;
  text-align: center;
  padding: 0.6rem 1.2rem;
  background-color: #1c1c1c;
  color: rgba(189, 139, 255, 0.9) !important;
  border-radius: 12px;
  font-size: 0.85rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const Separator = styled.hr`
  width: 50px;
  border: 0;
  border-top: 2px solid #A767FB;
  margin: 0.5rem 0;
`;

const ETAPAS = [
  {
    numero: "01",
    titulo: "Licenciatura em Multimédia e Tecnologias da Comunicação",
    anos: "2020-2023",
    texto:
      "Esta formação apresentou uma articulação entre a teoria e a prática nas várias fases da criação multimédia - da conceção e planeamento ao desenvolvimento e avaliação - dotando-me de competências técnicas (audiovisuais, 3D, criação de jogos, aplicações móveis e páginas Web dinâmicas) e de uma visão crítica sobre os processos comunicacionais e a interação humano-computador. No plano pessoal, fortaleceu a minha curiosidade, capacidade de resolver problemas complexos e de trabalhar em equipa; no profissional, conferiu-me versatilidade para conceber e produzir conteúdos inovadores, adaptáveis a diferentes setores da indústria, promovendo a eficiência, a inovação e a experiência do utilizador.",
    plano: "https://www.ua.pt/pt/c/1531/p",
    media: "15,4",
    marcos: [
      {
        titulo: "Web Design",
        info: "Universidade - Primeiro contacto com UX/UI Design - (2020)",
        realces: ["UX/UI Design"],
      },
      {
        titulo: "Desenvolvimento Web",
        info: "Primeiro contacto com HTML, CSS e Bootstrap - (2021)\nPrimeiro contacto com JavaScript - (2021)",
        realces: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      },
      {
        titulo: "3D & Desenvolvimento Web",
        info: "Primeiro contacto com Unity3D e Blender - (2022)\nPrimeiro contacto com React e React Native - (2022-2023)",
        realces: ["Unity3D", "Blender", "React Native", "React"],
      },
    ],
  },
  {
    numero: "02",
    titulo: "Mestrado em Comunicação e Tecnologias Web",
    anos: "2023-2025",
    texto:
      "O MCTW aprofundou principalmente a minha especialização em UX/UI Design e Desenvolvimento Web, focando-se na conceptualização, desenvolvimento e avaliação de soluções Web com base em metodologias de Challenge Based Learning. Aqui, desenvolvi competências chave na criação de produtos digitais sustentáveis, design de interfaces responsivas e inclusivas, e avaliação da experiência do utilizador. A experiência de propor soluções para desafios reais reforçou a minha autonomia, pensamento estratégico e espírito empreendedor. Profissionalmente, preparou-me para liderar projetos Web, integrando tecnologias atuais e emergentes e garantindo a acessibilidade, usabilidade e impacto social positivo do projeto em questão.",
    plano: "https://www.ua.pt/pt/c/508/p",
    media: "17,3",
    marcos: [
      {
        titulo: "UX & Tecnologias Web",
        info: "Design e Avaliação de Experiência do Utilizador, Design de Comunicação Web e Tecnologias e Desenvolvimento Web - (2023)",
        realces: ["Experiência do Utilizador", "Comunicação Web", "Desenvolvimento Web"],
      },
      {
        titulo: "Acessibilidade & Interfaces",
        info: "Acessibilidade Digital e Conformidade (WCAG) e Interfaces Avançadas - (2024)\nProjeto Web: Boomerang - (2024)",
        realces: ["Acessibilidade Digital", "WCAG", "Interfaces Avançadas", "Boomerang"],
      },
      {
        titulo: "Investigação em UX",
        info: "Recolha e Análise de Dados e Metodologias de Investigação - (2024)\nDissertação: UX Toolkit - (2025)",
        realces: ["Recolha e Análise de Dados", "Metodologias de Investigação", "UX Toolkit"],
      },
    ],
  },
];

// destaca no texto os termos de "realces" (os mais longos primeiro, para "React Native" ganhar a "React")
const escapar = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const realcar = (texto, realces = []) => {
  if (!realces.length) return texto;
  const termos = [...realces].sort((a, b) => b.length - a.length).map(escapar);
  const re = new RegExp(`(${termos.join("|")})`, "g");
  return texto.split(re).map((parte, i) =>
    i % 2 ? (
      <strong key={i} className="roadmap_realce">
        {parte}
      </strong>
    ) : (
      parte
    )
  );
};

// pontos da linha cronológica: "etapa" = nó grande numerado, "marco" = ponto pequeno com legenda
const PONTOS = ETAPAS.flatMap((e, etapa) => [
  { tipo: "etapa", etapa },
  ...e.marcos.map((m) => ({ tipo: "marco", etapa, ...m })),
]);

// geometria da linha (px)
// margem igual à do resto do site (.instagram-container: 80px a partir de 1080px, 1em abaixo)
const margemSite = () => (window.matchMedia("(min-width: 1080px)").matches ? 80 : 16);
const RAIO_ETAPA = 15; // o lado esquerdo do nó fica alinhado com a margem
// em ecrãs estreitos a linha fica mais larga que o ecrã e faz scroll;
// 960 / 4 segmentos = 240px entre pontos, mais que os 210px de cada legenda
const PASSO_MIN = 960;
const ALTURA_MIN = 300; // a altura real acompanha a legenda mais alta (ver medirAltura)
const MARGEM_INFERIOR = 24;
// os marcos alternam ligeiramente de altura (zigue-zague); o texto das legendas fica todo à mesma altura
const Y = { etapa: 165, marcos: [192, 184] };
const Y_TEXTO = 214;
const TRACEJADO_EXTRA = 26; // quanto o tracejado continua ao lado do texto

// cada etapa ocupa a largura do ecrã: o nó seguinte fica junto à margem direita
// e a linha continua até ao fim da página
const geometria = (largura, margem) => {
  const x0 = margem + RAIO_ETAPA;
  const passo = Math.max(largura - 2 * x0, PASSO_MIN);
  const coords = [];
  ETAPAS.forEach((e, s) => {
    const xEtapa = x0 + s * passo;
    coords.push({ x: xEtapa, y: Y.etapa });
    e.marcos.forEach((m, k) => {
      coords.push({ x: xEtapa + ((k + 1) * passo) / (e.marcos.length + 1), y: Y.marcos[k % 2] });
    });
  });
  const larguraTotal = x0 + ETAPAS.length * passo + x0;
  const linha = [...coords, { x: larguraTotal, y: Y.etapa }];

  const acumulado = linha.reduce((acc, c, i) => {
    const ant = linha[i - 1];
    acc.push(i ? acc[i - 1] + Math.hypot(c.x - ant.x, c.y - ant.y) : 0);
    return acc;
  }, []);

  return {
    passo,
    x0,
    cabe: passo <= largura - 2 * x0,
    coords,
    larguraTotal,
    caminho: linha.map((c, i) => `${i ? "L" : "M"} ${c.x} ${c.y}`).join(" "),
    // fração do comprimento da linha até cada ponto (para a linha de progresso)
    fracao: (i) => acumulado[i] / acumulado[acumulado.length - 1],
  };
};

const RoadmapAcademico = () => {
  const [ativo, setAtivo] = useState(0);
  const [dims, setDims] = useState({ largura: 1280, margem: 80 });
  const ativoRef = useRef(0);
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  const [altura, setAltura] = useState(ALTURA_MIN);

  const { largura, margem } = dims;
  const { passo, x0, cabe, coords, larguraTotal, caminho, fracao } = useMemo(
    () => geometria(largura, margem),
    [largura, margem]
  );
  const etapaIdx = PONTOS[ativo].etapa;
  const etapaAtiva = ETAPAS[etapaIdx];
  const total = PONTOS.length;

  // a área da linha cresce até ao fundo da legenda mais alta, para nenhum texto ficar cortado
  useLayoutEffect(() => {
    const medirAltura = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      let fundo = 0;
      canvas.querySelectorAll(".roadmap_legenda").forEach((el) => {
        fundo = Math.max(fundo, el.offsetTop + el.offsetHeight);
      });
      setAltura(Math.max(ALTURA_MIN, Math.ceil(fundo + MARGEM_INFERIOR)));
    };
    medirAltura();
    // volta a medir quando a fonte (Poppins) acabar de carregar, porque muda a largura do texto
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(medirAltura);
  }, [dims]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const ro = new ResizeObserver(() => setDims({ largura: track.clientWidth, margem: margemSite() }));
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    ativoRef.current = ativo;
    const track = trackRef.current;
    if (!track) return;
    // ecrã largo: avança uma etapa de cada vez; ecrã estreito: centra o ponto ativo
    const left = cabe ? etapaIdx * passo : coords[ativo].x - x0;
    track.scrollTo({ left, behavior: "smooth" });
  }, [ativo, etapaIdx, passo, x0, cabe, coords]);

  // setas ↑/↓ (e ←/→) navegam na linha quando o foco está nela
  // (assim as setas continuam a fazer scroll à página no resto do site)
  const onKeyDown = (e) => {
    const a = ativoRef.current;
    const seguinte = e.key === "ArrowDown" || e.key === "ArrowRight";
    const anterior = e.key === "ArrowUp" || e.key === "ArrowLeft";
    let novo = null;
    if (seguinte && a < total - 1) novo = a + 1;
    else if (anterior && a > 0) novo = a - 1;
    else if (e.key === "Home") novo = 0;
    else if (e.key === "End") novo = total - 1;
    if (novo === null) return;
    e.preventDefault();
    setAtivo(novo);
    // o foco acompanha o ponto ativo
    const pontos = trackRef.current.querySelectorAll("[data-ponto]");
    if (pontos[novo]) pontos[novo].focus({ preventScroll: true });
  };

  const descricaoPonto = (p) =>
    p.tipo === "etapa"
      ? `${ETAPAS[p.etapa].numero} - ${ETAPAS[p.etapa].titulo}`
      : `${p.titulo} - ${p.info}`;

  return (
    <div id="percurso" className="into_divvv">
      <div className="skills_div">
        <div className="linhasss_roxos">
          <div className="roadmap_linha_numero">
            <p className="roadmap_linha_numero_txt">02</p>
          </div>
        </div>

        <div className="instagram-container">
          <Reveal from="left" className="instagram-info">
            <p className="paragrafo_intro_sizes">A nível Académico - Universidade de Aveiro</p>
            <h2 className="fontsize_tags">
              <span className="title_marcado_koru">Percurso.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal>
          <p id="roadmap_instrucoes" className="sr-only">
            Linha cronológica com {total} pontos. Use as setas para navegar entre os pontos.
          </p>
          <div
            className="roadmap_track"
            ref={trackRef}
            role="group"
            aria-label="Linha cronológica do percurso académico"
            aria-describedby="roadmap_instrucoes"
            onKeyDown={onKeyDown}
          >
            <div className="roadmap_canvas" ref={canvasRef} style={{ width: larguraTotal, height: altura }}>
              <svg className="roadmap_svg" width={larguraTotal} height={altura} aria-hidden="true">
                <path d={caminho} fill="none" stroke="#1c1c2e" strokeWidth="2.5" />
                <motion.path
                  d={caminho}
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: Math.max(fracao(ativo), 0.001) }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>

              {PONTOS.map((p, i) => {
                const { x, y } = coords[i];
                const alcancado = i <= ativo;
                const eAtivo = i === ativo;

                if (p.tipo === "etapa") {
                  const etapa = ETAPAS[p.etapa];
                  return (
                    <React.Fragment key={i}>
                      <span
                        className={`roadmap_numero ${alcancado ? "alcancado" : ""}`}
                        style={{ left: x - RAIO_ETAPA, top: y - 85 }}
                      >
                        {etapa.numero}
                      </span>
                      <button
                        type="button"
                        className={`roadmap_etapa ${alcancado ? "alcancado" : ""} ${eAtivo ? "ativo" : ""}`}
                        style={{ left: x, top: y }}
                        onClick={() => setAtivo(i)}
                        aria-label={descricaoPonto(p)}
                        data-ponto
                        tabIndex={eAtivo ? 0 : -1}
                        aria-current={eAtivo ? "step" : undefined}
                      >
                        {eAtivo && (
                          <motion.span
                            className="roadmap_halo"
                            animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0.25, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        )}
                        <span className="roadmap_etapa_centro" />
                      </button>
                    </React.Fragment>
                  );
                }

                return (
                  <React.Fragment key={i}>
                    <button
                      type="button"
                      className={`roadmap_marco ${alcancado ? "alcancado" : ""} ${eAtivo ? "ativo" : ""}`}
                      style={{ left: x, top: y }}
                      onClick={() => setAtivo(i)}
                      aria-label={descricaoPonto(p)}
                      data-ponto
                      tabIndex={eAtivo ? 0 : -1}
                      aria-current={eAtivo ? "step" : undefined}
                    />
                    <motion.div
                      className={`roadmap_legenda ${eAtivo ? "ativo" : ""}`}
                      style={{ left: x, top: y }}
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                      onClick={() => setAtivo(i)}
                      aria-hidden="true"
                    >
                      <span className="roadmap_tracejado" style={{ height: Y_TEXTO - y + TRACEJADO_EXTRA }} />
                      <div className="roadmap_legenda_txt">
                        <p className="roadmap_legenda_titulo">{p.titulo}</p>
                        <p className="roadmap_legenda_sub">
                          {realcar(p.info, p.realces)}
                        </p>
                      </div>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="roadmap_wrapper">
            <div className="roadmap_controlos">
              <div className="roadmap_botoes">
                <button
                  type="button"
                  className="roadmap_btn"
                  onClick={() => setAtivo((a) => Math.max(a - 1, 0))}
                  disabled={ativo === 0}
                  aria-label="Ponto anterior"
                >
                  <FiChevronLeft />
                </button>
                <span className="roadmap_contador" aria-live="polite">
                  {ativo + 1} / {total}
                </span>
                <button
                  type="button"
                  className="roadmap_btn"
                  onClick={() => setAtivo((a) => Math.min(a + 1, total - 1))}
                  disabled={ativo === total - 1}
                  aria-label="Ponto seguinte"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={etapaAtiva.numero}
                className="roadmap_detalhe"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="tituloEtapasAcademicas">
                  <span className="roadmap_detalhe_num">{etapaAtiva.numero}</span>
                  {etapaAtiva.titulo} ({etapaAtiva.anos})
                </p>
                <p className="paragrafo_percurso">{etapaAtiva.texto}</p>
                <ButtonsContainer>
                  <ButtonPlanoCurricular href={etapaAtiva.plano} target="_blank" rel="noopener noreferrer">
                    Plano Curricular
                  </ButtonPlanoCurricular>
                  <Separator />
                  <p style={{ fontSize: "18px", margin: 0 }}>
                    Média: <strong>{etapaAtiva.media}</strong>
                  </p>
                </ButtonsContainer>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default RoadmapAcademico;
