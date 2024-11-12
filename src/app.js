const express = require('express');
//const chalk = require('chalk');
const debug = require('debug')
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.get('/', (req, res) => {
    res.send('Hello, World!');
})


app.listen(port, () => {
    debug("Server is running on port", port);
});