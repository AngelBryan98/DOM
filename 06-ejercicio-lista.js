const $boton = document.querySelector("#boton");
const $lista = document.querySelector("#lista");
let contador = 1;

$boton.addEventListener("click", () => {
    const agregarLista = document.createElement("li");
    agregarLista.textContent = contador;
    contador ++
    $lista.appendChild(agregarLista);
});