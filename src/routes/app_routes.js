const express = require('express');
const router = express.Router();


const user_routes = require('../controllers/data_contrl');

router.post('/users', user_routes.createNewStudent);

router.get('/users', user_routes.fetchStudents);

router.get('/users/_id', user_routes.fetchStudent);

router.put('/users/_id', user_routes.updateStudent);

router.delete('/users/_id', user_routes.deleteStudent);

// o3KJeuK9w2FWIyWX

// mongodb+srv://kamalai:<password>@cluster0.mu2f9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

module.exports = router;