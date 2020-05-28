const express = require("express");
const app = express();

const service = require("./service");

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => res.send("Hello"));

app.get("/getIp", async (_, res) => {
  try {
    const ip = await service.myIp();
    return res.json({ ip });
  } catch (ex) {
    console.error("Error to getting ip", ex);
    res.sendStatus(500);
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
