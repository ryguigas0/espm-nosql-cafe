import express from "express";
import path from "node:path";
import { createClient } from "redis";

const redis = createClient();

redis.on("error", (err) => console.log("Redis Client Error", err));

await redis.connect();

const app = express();

app.use(express.json());
app.use(express.static(path.join(import.meta.dirname, "assets")));

app.post("/pedido", async (req, res) => {
  const items = req.body.items;

  if (!items || items.length === 0) {
    res.status(400).json({
      error: "Missing items",
    });
    return;
  }

  const ip = req.ip;

  console.log({ ip, items });

  await redis.set(ip, JSON.stringify(items));

  res.status(201).json({
    message: "Cart created!",
  });
});

app.get("/carrinho", async (req, res) => {
  const ip = req.ip;

  const cartData = await redis.get(ip);

  if (!cartData) {
    res.status(404).json({ error: "Cart data not found!" });
    return;
  }

  const items = JSON.parse(cartData);

  res.status(200).json({ message: "Cart found!", items });
});

app.listen(3000, async () => {
  console.log("Servidor rodando...");
});
