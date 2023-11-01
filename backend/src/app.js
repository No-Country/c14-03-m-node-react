const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan')
const router = require('./routes');
const errorHandler = require('./utils/errorHandler');
const ListAnime = require('./models/ListAnime');// Importa el modelo ListAnime
require('dotenv').config();

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

app.use(express.static(path.join(__dirname, 'public')));

// Define las listas predeterminadas
const defaultLists = [
    { title: 'Viendo', description: 'Animes que estoy viendo' },
    { title: 'Vistos', description: 'Animes que he visto' },
    { title: 'Por Ver', description: 'Animes que quiero ver' }
];

// Función para crear las listas predeterminadas
const createDefaultLists = async () => {
    for (const defaultList of defaultLists) {
        await ListAnime.create(defaultList);
    }
};

// Inicialización de la aplicación
const startApp = async () => {
    // Configura la base de datos y otros componentes de la aplicación
    // Esto puede incluir la configuración de la conexión a la base de datos y otros componentes específicos de tu aplicación

    // Crea las listas predeterminadas en la base de datos durante la inicialización
    await createDefaultLists();

    // Configura rutas y otros componentes de la aplicación
    app.use('/api/v1', router);

    // Ruta de bienvenida
    app.get('/', (req, res) => {
        return res.send("Welcome to express!");
    })

    // Middlewares después de las rutas
    app.use(errorHandler)

    // Inicia el servidor y escucha las solicitudes de los usuarios
};

startApp();

module.exports = app;
