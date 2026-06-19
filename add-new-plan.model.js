const mongoose = require('mongoose');

const planListSchema = new mongoose.Schema({
    planName: String,
    planDsc: String,
    planDate: Date
})

module.exports = mongoose.model('Plan', planListSchema)