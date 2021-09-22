// Manejo de la conexión de las bandas
class Bands {
    constructor() {
        this.bands = [];
    }
    // agrega nuevas bandas 
    addBands(band = new Band()) {
        this.bands.push(band);
    }
    // retornan las bandas que se han creado
    getBands() {
        return this.bands;
    }
    // elimina las bandas 
    deleteBands(id = '') {
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }
    // Genera la acumulación de los votos según el id de la banda
    voteBand(id = '') {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.votes++;
                return band;
            } else {
                return band;
            }
        });
    }
}

module.exports = Bands;