const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    doctor: {
        type: String,
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patientSchema'
    },
    status: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;