const mongoose = require('mongoose');
const Joi = require('joi');

const recordSchema = new mongoose.Schema({
    techName: String,
    techEmail: String,
    companyName: String,
    serviceDate: Date,
    arrivalTime: Date,
    leftTime: Date,
    description: String,
    services: [ String ],
    isJobDone: Boolean,
    note: String,
    totalHour: Number,

})

