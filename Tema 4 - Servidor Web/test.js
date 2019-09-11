const express = require("express");
const app = express();
app.use(express.json());

const puerto = 443;

app.listen(puerto, () => {
  console.log(`servidor inicializado en puerto  ${puerto} `);
});

let contador = 1;

app.get("/api/mensajes", (req, res) => {
  res.json({ msg: "Hola mundo!" });
});
