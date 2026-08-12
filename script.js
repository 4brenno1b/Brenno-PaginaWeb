// Seleciona todos os cards de artigos
const artigos = document.querySelectorAll("article");

artigos.forEach((artigo) => {
  const btnLike = artigo.querySelector(".like");
  const btnDeslike = artigo.querySelector(".deslike");

  let estado = null; // null: neutro, 'like': curtido, 'deslike': descurtido

  btnLike.addEventListener("click", () => {
    const spanLike = btnLike.querySelector("span");
    const spanDeslike = btnDeslike.querySelector("span");

    let numLike = Number(spanLike.textContent);
    let numDeslike = Number(spanDeslike.textContent);

    if (estado === "like") {
      // Remove o like
      spanLike.textContent = numLike - 1;
      estado = null;
    } else {
      // Se já tinha deslike, remove o deslike primeiro
      if (estado === "deslike") {
        spanDeslike.textContent = numDeslike - 1;
      }
      // Adiciona o like
      spanLike.textContent = numLike + 1;
      estado = "like";
    }
  });

  btnDeslike.addEventListener("click", () => {
    const spanLike = btnLike.querySelector("span");
    const spanDeslike = btnDeslike.querySelector("span");

    let numLike = Number(spanLike.textContent);
    let numDeslike = Number(spanDeslike.textContent);

    if (estado === "deslike") {
      // Remove o deslike
      spanDeslike.textContent = numDeslike - 1;
      estado = null;
    } else {
      // Se já tinha like, remove o like primeiro
      if (estado === "like") {
        spanLike.textContent = numLike - 1;
      }
      // Adiciona o deslike
      spanDeslike.textContent = numDeslike + 1;
      estado = "deslike";
    }
  });
});

// Alternar Tema Escuro
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

if (btnTemaEscuro) {
  btnTemaEscuro.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");
  });
}