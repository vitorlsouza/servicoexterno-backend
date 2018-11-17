const express = require('express');

const routes = express.Router();

const ServicoController = require('./controllers/ServicoController');

routes.get('/servicos', ServicoController.index);
routes.post('/servicos/novo', ServicoController.store);

module.exports = routes;
