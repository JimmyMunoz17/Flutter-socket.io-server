// exportación con nombre del IO del index
const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands(); // llamado de las clases bands

//creación de las bandas usando band

bands.addBands(new Band('Queen'));
bands.addBands(new Band('Bon Jovi'));
bands.addBands(new Band('Héroes del silecio'));
bands.addBands(new Band('BTS'));

//console.log(bands);


// Mensajes de Socket IO
io.on('connection', client => {

    console.log('Cliente conectado');

    client.emit('active-bands', bands.getBands()); // emite un mensaje y las bandas que se encuntran creadas

    client.on('disconnect', () => {
        console.log('Cliente desconectado')
    });
    // Escuchando el mensaje .on , el payload contiene el mensaje
    client.on('mensaje', (payload) => {
        console.log('Mensaje!!!', payload);

        io.emit('mensaje', { admin: 'Nuevo Mensaje' });
    });
    client.on('vote-band', (payload) => {
        //console.log(payload);
        bands.voteBand(payload.id);
        io.emit('active-bands', bands.getBands()); // todos pueden ver los cambios de los votos
    });

    client.on('add-band', (payload) => {
        //console.log(payload);
        const newBand = new Band(payload.name);
        bands.addBands(newBand);
        io.emit('active-bands', bands.getBands()); // todos pueden ver la nueva banda
    })

    client.on('delete-band', (payload) => {
        //console.log(payload);
        bands.deleteBands(payload.id);
        io.emit('active-bands', bands.getBands()); // todos pueden ver la banda eliminada
    })



    // //Escucha de mensaje del cliente .on 
    // client.on('emitir-mensaje', (payload) => {
    //     // console.log(payload)
    //     //io.emit('nuevo-mensaje', payload); // emite para todos
    //     client.broadcast.emit('nuevo-mensaje', payload); // emite a todos menos el que lo emitio
    // });
});