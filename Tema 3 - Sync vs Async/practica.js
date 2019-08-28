const fs = require("fs");
const util = require("util");

/**
*Dado un directorio, realice un backup del contenido de ese directorio,
 en la misma rutaen donde se encuentra la carpeta objetivo.
●Solo deben copiarse los archivos  (no los directorios), y no deben copiarse los archivosocultos.
●Si alguna de las copias falla, eso no debe interferir con la ejecución de la copia de lasdemás.
●El copiado de los archivos se debe realizar en forma sincrónica.
*/

function backupDirectorio(directorio) {
  let archivos = fs.readdirSync(directorio);
  console.log(archivos);
  console.log(archivos.filter(archivo => archivo.startsWith("o")));
}
//countries.filter((country) => country.startsWith("N"))

module.exports = {
  backupDirectorio
};
