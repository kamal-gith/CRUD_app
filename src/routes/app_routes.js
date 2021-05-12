const express = require('express');
const router = express.Router();


const user_routes = require('../controller/data_contrl');

router.post('/users', user_routes.createNewPlayer);

router.get('/users', user_routes.fetchPlayers);

router.get('/users/_id', user_routes.fetchPlayer);

router.put('/users/_id', user_routes.updatePlayer);

router.delete('/users/_id', user_routes.deletePlayer);


module.exports = router;