const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello All! This is Farhan Akthar K. An Update is going to be made.This will be going to be another update.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);