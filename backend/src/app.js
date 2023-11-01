const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./utils/errorHandler");
const morgan = require("morgan");

require("dotenv").config();

const path = require("path");

// Esta es nuestra aplicación
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", router);
app.get("/", (req, res) => {
  return res.send("Welcome to express!");
});


// middlewares después de las rutas
app.use(errorHandler);

//Condigo de prueba
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Error de Multer
    res.status(400).json({ error: err.message });
  } else {
    // Otro tipo de error
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = app;
