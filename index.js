
const mongoose = require('mongoose');
const express = require('express');

// router 



// connect to mongoDB

mongoose.connect('mongodb://localhost/pcxservice', { useNewUrlParser: true })
.then(console.log('Connecting to MongoDB....'))
.catch((err)  => console.log('Error:', err));


   

