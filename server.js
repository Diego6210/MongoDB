require('./Config/Config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./Routes/Routes'));


mongoose.connect(process.env.URLDB,{ useNewUrlParser: true,useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log(`Conectado a la Base de datos: ${process.env.DB_Name}`);
});



app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`);
});