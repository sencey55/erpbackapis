const express = require('express')
const routes = require('./routes');
const { error404Handler, errorHandler } = require('./middleware');
const app = express()

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use('/api', routes);

//Ruta principal
app.get('/', (req, res) => {
    res.send('Ruta inicial')
})

app.use(error404Handler);
app.use(errorHandler);

module.exports = app;