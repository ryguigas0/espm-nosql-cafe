const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "assets")));

app.listen(3000, async () => {
  console.log("Servidor rodando...");
});
