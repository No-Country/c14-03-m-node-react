const { getAll, create, getOne, remove, update, login, logged } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJwt')
const upload = require('../utils/multer');

const routerUser = express.Router();

routerUser.route('/')
    .get(getAll)
    .post(upload.single('profilePicture'), create)

routerUser.route('/login')
    .post(login)


routerUser.route('/me')
    .get(logged)



routerUser.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);



module.exports = routerUser;