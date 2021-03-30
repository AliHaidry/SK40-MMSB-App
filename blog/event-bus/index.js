const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.error(err.message);
  }); // posts
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.error(err.message);
  }); // comments
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.error(err.message);
  }); // query service
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.error(err.message);
  }); // moderation service
  

  res.send({ status: "OK" });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("listening on port 4005");
}); // event bus port
