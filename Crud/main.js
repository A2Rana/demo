const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');

app.use(bodyparser.urlencoded({
    extended: true
}));

app.post('/', (req, res) => {
    const requiredPath = path.join(__dirname, '..', 'Number-Frequency', 'index.html');
    res.sendFile(requiredPath);
});

app.get('/quotes', (req, res) => {
    const requiredPath = path.join(__dirname, '..', 'Number-Frequency', 'index.html');
    res.sendFile(requiredPath);
});

app.listen(3000, () => {
    console.log('Listening on port number 3000');
});