// exportación con nombre del IO del index
const { io } = require('../index');

// Mensajes de Socket IO
io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => {
        console.log('Cliente desconectado')
    });
    // Escuchando el mensaje .on , el payload contiene el mensaje
    client.on('mensaje', (payload) => {
        console.log('Mensaje!!!', payload);

        io.emit('mensaje', { admin: 'Nuevo Mensaje' });
    });
});