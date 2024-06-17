const mongoose = require('mongoose');

const logsSchema = mongoose.Schema({
    logId: {
        type: Number,
        require: true
    },
    ts: {
        type: Number,
        require: true,
        default: new Date().getTime()
    },
    eCO2: {
        type: Number,
    },
    nodoId: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Logs', logsSchema);
