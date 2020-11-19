// Importamos express
const express = require('express');
const config = require('../config.js')
const user = require('./components/user/network')
// inicializamos express
const app = express()

// ROUTES
app.use('/api/user', user)


app.listen(config.api.port, () => {
    console.log('API escuchando en el puerto', config.api.port);
})
