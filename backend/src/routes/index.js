const express = require('express');
const routerUser = require('./user.router');
const routerGenre = require('./genre.router');
const routerAnime = require('./anime.router');



const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/genres', routerGenre)
router.use('/animes', routerAnime)




module.exports = router;