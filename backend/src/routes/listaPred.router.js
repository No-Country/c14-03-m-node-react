const { getAll, remove, } = require('../controllers/listaPreder.controllers');
const express = require('express');

const routerListAnimePre = express.Router();

routerListAnimePre.route('/')
    .get(getAll)


routerListAnimePre.route('/:id')
    .delete(remove)


module.exports = routerListAnimePre;