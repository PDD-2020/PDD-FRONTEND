'use strict'
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.listen(9000, () => console.log('Rodando na porta 9000'));