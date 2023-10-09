const express = require('express');
const routerUser = require('./user.router');
const routerAnime = require('./anime.router');
const routerVideo = require('./video.router');


const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
// router.use('/animes', routerAnime)
// router.use('/videos', routerVideo)



module.exports = router;