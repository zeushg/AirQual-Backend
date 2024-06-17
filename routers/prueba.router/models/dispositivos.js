const mongoose = require('mongoose');

const dispositivoSchema = mongoose.Schema({
    dispositivoId: {
        type: Number,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    ubicacion: {
        type: String
    },
    CO2: {
        type: Number,
    },
    topic: {
        type: String,
        require: true
    },
    topicSrvResponse: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Dispositivo', dispositivoSchema);
