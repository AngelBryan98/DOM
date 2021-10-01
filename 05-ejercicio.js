const $body =document.querySelector("body");
const $selectColor = document.querySelector("#colors");

$selectColor.addEventListener("change", (e) => {
    if (e.target.value === "rojo") {
        $body.className = "";
        $body.classList.add("red");
    } else if (e.target.value == "azul") {
        $body.className = "";
        $body.classList.add("blue");
    } else if (e.target.value == "verde") {
        $body.className = "";
        $body.classList.add("green");
    }
});