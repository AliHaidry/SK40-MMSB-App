const express = require('express');
const bodyParser = require('bodyParser');
const axios = require('axios');

// new express application
const app = express();
// wire up the bodyParser
app.use(bodyParser.json());


/** this service watch for events */

app.post('/events', (req, res)=>{
    
});