const express = require('express');
const routerUser = require('./user.router');
const routerListAnime = require('./listAnime.router');
const routerComment = require('./comment.router');
const routerPost = require('./post.router');


const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/listanimes', routerListAnime)
router.use('/comments', routerComment)
router.use('/posts', routerPost)
// router.use('/videos', routerVideo)



module.exports = router;