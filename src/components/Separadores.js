import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ampliavel } from "./acessibilidade";
import "../App.css";

// Separadores com imagens (estilo "underline", inspirado no Storybook).
// Todas as imagens ficam no DOM, empilhadas na mesma célula da grelha:
// o browser descarrega-as e descodifica-as antes do clique, por isso a troca é instantânea
// e a área não muda de altura entre separadores.
const Separadores = ({ itens, cor = "#5331B2", onAmpliar, rotulo }) => {
  const [ativo, setAtivo] = useState(itens[0].id);
  const base = useId();
  const tabsRef = useRef({});
  const barraRef = useRef(null);
  const medidaRef = useRef(null);
  const focarRef = useRef(false);
  const [compacto, setCompacto] = useState(false);
  const indice = itens.findIndex((t) => t.id === ativo);

  // modo compacto (1 separador entre setas) sempre que os separadores não cabem numa linha.
  // a largura necessária é medida numa cópia invisível da lista, que nunca esconde separadores.
  useLayoutEffect(() => {
    const barra = barraRef.current;
    const medida = medidaRef.current;
    if (!barra || !medida) return;
    const avaliar = () => setCompacto(medida.scrollWidth > barra.clientWidth);
    avaliar();
    const ro = new ResizeObserver(avaliar);
    ro.observe(barra);
    // a fonte (Poppins) muda a largura do texto quando acaba de carregar
    if (document.fonts && document.fonts.ready)
      document.fonts.ready.then(avaliar);
    return () => ro.disconnect();
  }, []);

  // depois de mudar com o teclado, o foco vai para o novo separador (já visível)
  useEffect(() => {
    if (!focarRef.current) return;
    focarRef.current = false;
    const tab = tabsRef.current[ativo];
    if (tab) tab.focus();
  }, [ativo]);

  // setas ‹ › (modo compacto): anterior / seguinte; desativadas nas pontas, como no roadmap
  const anterior = itens[indice - 1];
  const seguinte = itens[indice + 1];

  // setas ←/→, Home e End mudam de separador (padrão WAI-ARIA tabs)
  const onKeyDown = (e) => {
    const i = indice;
    let novo = null;
    if (e.key === "ArrowRight") novo = (i + 1) % itens.length;
    else if (e.key === "ArrowLeft")
      novo = (i - 1 + itens.length) % itens.length;
    else if (e.key === "Home") novo = 0;
    else if (e.key === "End") novo = itens.length - 1;
    if (novo === null) return;
    e.preventDefault();
    focarRef.current = true;
    setAtivo(itens[novo].id);
  };

  return (
    <div
      className={`separadores ${compacto ? "compacto" : ""}`}
      style={{ "--separador-cor": cor }}
    >
      {/* a linha acompanha a largura do texto da secção; em mobile mostra 1 separador entre setas */}
      <div className="separadores_barra" ref={barraRef}>
        {/* cópia invisível só para medir a largura de todos os separadores lado a lado */}
        <div className="separadores_medida" ref={medidaRef} aria-hidden="true">
          {itens.map((t) => (
            <span key={t.id} className="separadores_tab ativo">
              {t.rotulo}
            </span>
          ))}
        </div>
        {/* mesmo botão das setas do roadmap (About) */}
        <button
          type="button"
          className="roadmap_btn separadores_seta"
          onClick={() => setAtivo(anterior.id)}
          disabled={!anterior}
          aria-label={
            anterior
              ? `Separador anterior: ${anterior.rotulo}`
              : "Separador anterior"
          }
        >
          <FiChevronLeft aria-hidden="true" />
        </button>
        <div
          className="separadores_lista"
          role="tablist"
          aria-label={rotulo}
          onKeyDown={onKeyDown}
        >
          {itens.map((t) => {
            const eAtivo = t.id === ativo;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`${base}-tab-${t.id}`}
                aria-selected={eAtivo}
                aria-controls={`${base}-painel-${t.id}`}
                tabIndex={eAtivo ? 0 : -1}
                className={`separadores_tab ${eAtivo ? "ativo" : ""}`}
                onClick={() => setAtivo(t.id)}
                ref={(el) => (tabsRef.current[t.id] = el)}
              >
                {eAtivo && (
                  <motion.span
                    className="separadores_indicador"
                    layoutId={`${base}-indicador`}
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                {t.rotulo}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="roadmap_btn separadores_seta"
          onClick={() => setAtivo(seguinte.id)}
          disabled={!seguinte}
          aria-label={
            seguinte
              ? `Separador seguinte: ${seguinte.rotulo}`
              : "Separador seguinte"
          }
        >
          <FiChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="separadores_paineis">
        {itens.map((t) => {
          const eAtivo = t.id === ativo;
          return (
            <div
              key={t.id}
              role="tabpanel"
              id={`${base}-painel-${t.id}`}
              aria-labelledby={`${base}-tab-${t.id}`}
              aria-hidden={!eAtivo}
              className={`separadores_painel ${eAtivo ? "ativo" : ""}`}
            >
              <img
                className="img_diagram"
                src={t.imagem}
                alt={t.alt}
                width={t.largura}
                height={t.altura}
                loading="lazy"
                decoding="async"
                {...(onAmpliar ? ampliavel(() => onAmpliar(t.imagem)) : {})}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Separadores;
