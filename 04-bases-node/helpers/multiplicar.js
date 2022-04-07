const fs = require("fs"); //Acceso al file system!

const createFile = async (base = 5) => {
  //   return new Promise((res, rej) => {<<...>>});
  try {
    let salida = "";

    for (let i = 0; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    // fs.writeFile("tabla-5.txt", salida, (err) => {
    //   if (err) throw err;
    //   console.log("Archivo creado!");
    // });

    fs.writeFileSync(`tabla-${base}.txt`, salida); //Se ejecuta de manera sincrona.
    //Si todo sale bien:
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFileFunct: createFile,
};
