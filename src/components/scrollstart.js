import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const TITULOS = {
  "/": "Dinis Antunes | UX/UI Designer e Front-end Developer",
  "/aboutme": "Sobre mim | Dinis Antunes",
  "/projetos": "Projetos | Dinis Antunes",
  "/project-Koru": "Koru | Dinis Antunes",
  "/project-Boomerang": "Boomerang | Dinis Antunes",
  "/project-ToCare": "ToCare | Dinis Antunes",
  "/project-UXToolkit": "UX Toolkit | Dinis Antunes",
  "/project2": "Zetflicks | Dinis Antunes",
  "/project3": "Submerso | Dinis Antunes",
};

// ao mudar de página: volta ao topo, atualiza o título do separador
// e leva o foco para o conteúdo principal (para leitores de ecrã e teclado)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const primeiraVez = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = TITULOS[pathname] || "Dinis Antunes Portfólio";

    if (primeiraVez.current) {
      primeiraVez.current = false;
      return;
    }
    const main = document.getElementById("conteudo");
    if (main) main.focus({ preventScroll: true });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
