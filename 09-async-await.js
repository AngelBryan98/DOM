const $boton = document.querySelector("#boton");
const $div = document.querySelector("#div");

$boton.addEventListener("click", async() => {
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await resp.json();
    const imgPerro = document.createElement("img");
    imgPerro.src = data.message;
    imgPerro.width = "300"
    $div.appendChild(imgPerro);
});


/* etch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json()).then(data => {
        console.log(data);
        const imgPerro = document.createElement("img");
        imgPerro.src = data.message;
        $div.appendChild(imgPerro);
    }); */