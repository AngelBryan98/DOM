const $boton = document.querySelector("#boton");
const $div = document.querySelector("#div");

$boton.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json()).then(data => {
        console.log(data);
        const imgPerro = document.createElement("img");
        imgPerro.src = data.message;
        $div.appendChild(imgPerro);
    });
});




/* const peticion = fetch("https://dog.ceo/api/breeds/image/random")
.then(resp => resp.json()).then(data => {
    console.log(data);
    const imgPerro = document.createElement("img");
    imgPerro.src = data.message;
    $div.appendChild(imgPerro);
}); */
 

/* 
$boton.addEventListener("click", () => {
    const imgPerro = document.createElement("img")
}) */