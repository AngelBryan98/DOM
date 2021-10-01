const edad = document.querySelector("#edad");
const input = document.querySelector("#input");

const edadEs = () => {
    const inputValue = input.value;
    const mensaje = inputValue <= 18 ? "Ya eres mayor de edad" : "Aun eres menor de edad";
    edad.textContent = mensaje;
}