require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./router/index');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

const boot = async () => {
  app.listen(port, () => console.log(`App is listening on ${port}!`));
};

boot();
