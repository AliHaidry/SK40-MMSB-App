const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// new express application
const app = express();
// wire up the bodyParser
app.use(bodyParser.json());


/** this service watch for events */

app.post('/events', (req, res)=>{

});


app.listen(4003, ()=>{
    console.log('Listening on Port 4003');
});