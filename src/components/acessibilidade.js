import { useEffect } from "react";

// torna um elemento não interativo (ex.: imagem ampliável) utilizável com teclado
export const ampliavel = (abrir) => ({
  role: "button",
  tabIndex: 0,
  "aria-haspopup": "dialog",
  onClick: abrir,
  onKeyDown: (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrir();
    }
  },
});

// foca o botão de fechar, fecha o modal com Esc e devolve o foco ao elemento que o abriu
export const useFecharModal = (aberto, fechar) => {
  useEffect(() => {
    if (!aberto) return;
    const anterior = document.activeElement;
    // leva o foco para o botão de fechar do modal
    const fecharBtn = document.querySelector(".modal_fechar");
    if (fecharBtn) fecharBtn.focus();
    const onKey = (e) => e.key === "Escape" && fechar();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (anterior && anterior.focus) anterior.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aberto]);
};
