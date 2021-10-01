const $boton = document.querySelector("#boton");

$boton.addEventListener("click", () => {
    console.log("¡Me presionaste!");
});

const $inpText = document.querySelector("#text" );

$inpText.addEventListener("keydown", (e) => {
    console.log(e.target.value);
});