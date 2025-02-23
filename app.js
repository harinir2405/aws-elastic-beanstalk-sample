const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello from Harini. This is the sample file. I am going to modify it.'));
app.listen(port);
console.log(`App running on http://localhost:${port}`);
