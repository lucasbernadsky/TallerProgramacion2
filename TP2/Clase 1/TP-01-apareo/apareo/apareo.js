const fs = require("fs");

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta
 * @return {string} el texto leído
 */

function leerArchivoComoString(ruta) {
  let data;
  try {
    data = fs.readFileSync(ruta, "utf-8");
  } catch (algunError) {
    console.log("No se encontro el archivo");
  }
  return data;
}
//console.log(leerArchivoComoString("./in/10NumerosOrdenadosEntre1y50(setA).in"));

/**
 * escribe el texto en el archivo de la ruta. si no existe, y no se indica que se lo cree, debe lanzar un error.
 * @param {string} ruta
 * @param {string} texto
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
  let resources = ruta.split("/");
  //console.log(resources);
  let file = resources.pop();
  //console.log(file);
  let path = resources.join("/");
  console.log(path);
  let FileListinPath = fs.readdirSync(path);
  //console.log(FileListinPath);

  if (FileListinPath.includes(file)) {
    file = fs.writeFileSync(ruta, texto);
    console.log("Escribi archivo ya existente");
  } else {
    if (shouldCreateIfNotExists) {
      file = fs.writeFileSync(ruta, texto);
      console.log("Cree el archivo y lo escribio");
    } else {
      console.log("El archivo no existe, y se pidio no crearlo");
    }
  }
}

//escribirTextoEnArchivo(  "./out/archivoCreado.out",  "Este texto se creo bien",  false);

/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
  let VectorRecibido = str.split(separador);
  let arr = [];

  for (var num in VectorRecibido) {
    if (!isNaN(VectorRecibido[num])) {
      arr.push(VectorRecibido[num]);
    }
  }
  console.log(arr);
  return arr;
}
//transformarStringEnArrayDeNumeros("rara|0|arar|20|2|rwew|123123", "|");

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr
 * @param {string} separador
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      if (i === arr.length - 1) {
        str += arr[i].toString();
      } else {
        str += arr[i].toString() + separador;
      }
    }
  }
  console.log(str);
  return str;
}

//transformarArrayDeNumerosAUnSoloString([45, "erwer", 43, "rrtsr", 322], "|");

/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
  var arrCombinado = arrA.concat(arrB);
  arrCombinado = arrCombinado.sort(comparar);
  console.log(arrCombinado);
}
function comparar(a, b) {
  return a - b;
}

/**combinarDosArrays(
  [Number.MAX_VALUE, Number.MIN_VALUE, 22, 2, 34342, 19],
  [1241, 14]
); 
test commit
*/

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {}

/**
 * devuelve el indice de la posicion con el menor valor de un array.
 * @param {number[]} valores el array de numeros
 * @returns {number} el indice del menor valor
 */
function findMin(valores) {}

function actualizarIndicesYValores(indices, valores, arrs, min) {}
