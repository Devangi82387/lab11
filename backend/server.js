import express from "express";
import client from "prom-client";

const app = express();

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 }); // collect metrics every 5s

app.get("/status", (req, res) => res.json({ status: "ok", time: new Date() }));

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});


app.listen(4000, () => console.log("Backend listening on port 4000"));
