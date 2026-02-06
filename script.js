
const galeria = document.querySelector(".galeria");
const modal = document.querySelector(".modal");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const imagemGrande = document.getElementById("imagemGrande");
const btnFechar = document.querySelector(".fechar");

galeria.addEventListener("click", (e) => {

  if (e.target.classList.contains("ver-mais")) {

    const card = e.target.closest(".card");
    const img = card.querySelector("img");

    modalTitulo.textContent = card.dataset.titulo;
    modalTexto.textContent = card.dataset.texto;
    imagemGrande.src = img.src;

    modal.classList.remove("hidden");
  }

});


modal.addEventListener("click", () => {
  modal.classList.add("hidden");
});


document.querySelector(".modal-content")
  .addEventListener("click", (e) => {
    e.stopPropagation();
  });


btnFechar.addEventListener("click", (e) => {
  e.stopPropagation();
  modal.classList.add("hidden");
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});
