(function () {
  // Bloqueando arrastar imagens do site para baixar

  function desativarDragDrop() {
    document.addEventListener(
      "dragstart",
      (evento) => evento.preventDefault(),
      false
    );
    document.addEventListener(
      "drop",
      (evento) => evento.preventDefault(),
      false
    );
  }

  desativarDragDrop();
})();

// Atualizando o ano footer automaticamente

const ano = document.querySelector("#ano-atual");
ano.innerHTML = new Date().getFullYear();
