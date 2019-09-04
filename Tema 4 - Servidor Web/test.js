const express = require("express");
const app = express();

const puerto = 9443;
app.listen(puerto, () => {
  console.log(`servidor inicializado en puerto  ${puerto} `);
});
