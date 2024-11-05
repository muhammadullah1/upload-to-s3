const express = require("express");
const cors = require("cors");
const router = require("./routes");
const bodyParser = require('body-parser');
require('./config/dbConfig');

process.on("uncaughtException", (e) => {
  console.log(e);
});

const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors());
app.options("*", cors());

app.get("/api/test", (req, res) => { res.status(200).send(`API is working`)});
app.use("/api", router);

app.use((req, res) => {
  return res.status(404).send({
    success: false,
    message: `Cannot ${req.method} ${req.url}`,
  });
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  return res.status(err.status || 500).send({
    success: false,
    message: err.message,
  });
});

module.exports = app;
