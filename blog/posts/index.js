const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require ('crypto');
const cors = require('cors');
const axios = require('axios');


/** Middleware */
const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});


app.post('/posts', async (req, res) => {
    /** helps to generate the random user id. */
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    };


    /** notifying event bus or event broker */
    await axios.post("http://localhost:4005/events", {
        type : 'PostCreated',
        data: {
            id, title
        }
    });

    res.status(201).send(posts[id]);
});

/** post request handler */
app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);

    res.send({});
});



/** First service listen on port 4000 */
app.listen(4000, () => {
    console.log('listening on port 4000');
});