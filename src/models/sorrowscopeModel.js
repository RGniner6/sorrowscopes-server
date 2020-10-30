const mongoose = require('mongoose');

const sorrowscopeSchema = new mongoose.Schema({
    signName: {
        type: String,
        required: [true, 'Sorrowscope must have a signName' ],
        enum: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces' ],
        default: 'gemini'
    },
    sorrowscope: {
        type: String,
        required: [true, 'sorrowscope field compulsory'],
        unique: [true, 'That sorrowscope exists already'],
    }
});

const Sorrowscope = mongoose.model('Sorrowscope', sorrowscopeSchema);
module.exports = Sorrowscope;
