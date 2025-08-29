const express = require("express");
const path = require("path");

const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, "assets")));

app.post("/pedido", (req, res) => {
  const body = req.body;

  console.log({ body });

  res.status(200).send("ok");
});

app.listen(3000, async () => {
  console.log("Servidor rodando...");
});
