const express = require("express");
const app = express();
app.use(express.json());

const puerto = 8080;

app.listen(puerto, () => {
  console.log(`servidor inicializado en puerto  ${puerto} `);
});

let contador = 1;

app.get("/api/mensajes", (req, res) => {
  console.log("request " + contador++ + " recibido"); // acá debería obtener todos los recursos de tipo ‘mensaje’
  res.json({ msg: "Hola mundo!" });
});
