const { createFileFunct } = require("./helpers/multiplicar");

console.clear();
const base = 3;
createFileFunct(base)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
