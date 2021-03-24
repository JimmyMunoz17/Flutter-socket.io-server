const { Console } = require('console');
const { O_DIRECT } = require('constants');
const { Socket } = require('dgram');
const express = require('express'); // libreria de Node Express
const path = require('path');
require('dotenv').config(); // configuración del puerto conectado

//inicio de la aplicación de Node App Express
const app = express();

// Node Server - SOCKET IO
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
// llama el script de socket
require('./sockets/socket.js');



//path púbico html que se muestra
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));



// configuración del puerto al cual se configura en el archivo .env 'process.env.PORT'
server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en el puerto!!!: ', process.env.PORT)
})