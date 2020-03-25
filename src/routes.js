const express = require('express');
const OngControllers = require('./controllers/OngControllers');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//const crypto = require('crypto');
//const connection = require('./database/connection'); 

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//Rota Listar todas as ONGS do Banco de Dados
routes.get('/ongs', OngControllers.index);
routes.post('/ongs', OngControllers.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;