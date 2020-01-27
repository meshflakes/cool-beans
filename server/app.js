const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./rotes.js');
app.use(bodyParser.json()); // application/json





app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');  
})