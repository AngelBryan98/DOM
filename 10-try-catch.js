/* Try nos permite ejecutar codigo de una manera segura. */

const gravedad = 9.8;
console.log(gravedad);

/*Ejecuta el codigo si hay un error en catch. */
try {
    gravedad = 10.1;

/* El catch se ejecuta si hay un error recibiendo como primer parametro el error. */
} catch(error) {
    console.log(error);
/* Finally siempre se ejecuta. */
} finally {
    console.log("");
}
console.log(gravedad);