import express from 'express'
import path from 'path'
const app = express()

const PORT = process.env.PORT || 3000

app.get("/image", (_, res) => {
  res.sendFile(path.resolve(".", "image.png"));
})

app.get("*", (_req, res) => {
  res.sendFile(path.resolve(".", "index.html"));
});

app.listen(PORT)