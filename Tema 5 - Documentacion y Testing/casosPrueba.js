const request = require("request");

const options = {
  // opciones de configuración de la petición
};
try {
  const body = await request(options);
  // hacer algo!
} catch (err) {
  console.log(err);
}
