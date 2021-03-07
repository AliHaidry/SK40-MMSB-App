const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require ('crypto');

const app = express();
app.use(bodyParser.json());
const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});


app.post('/posts', (req, res) => {
    /** helps to generate the random user id. */
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    };
    res.status(201).send(posts[id]);
});


/** First service listen on port 4000 */
app.listen(4000, () => {
    console.log('listening on port 4000');
});