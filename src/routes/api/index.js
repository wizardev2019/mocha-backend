const express = require('express');

const route = express();

route.use(require('../../middleware/response'));
route.use(require('../../middleware/auth.middleware'));

route.use('/auth', require('./auth'));
route.use('/reflection', require('./reflection'));

module.exports = route;
