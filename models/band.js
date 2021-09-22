const { v4: uuidV4 } = require('uuid'); //Genera los id únicos
//Manejo de banda como objeto idependiente
class Band {
    constructor(name = 'no-name') {
        this.id = uuidV4(); //identificador único del id
        this.name = name;
        this.votes = 0;
    }
}

module.exports = Band; // exporta la Banda cundo se necesite