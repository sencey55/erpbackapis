const express = require('express');
const users = require('../api_servicios/users/routes');

const router = express.Router();

//routes users
router.use('/users', users);

module.exports = router;