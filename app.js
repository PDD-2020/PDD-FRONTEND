'use strict'
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const axios = require('axios');

axios.get('http://localhost:8080/cliente').then(resp => {

    console.log(resp.data);
});



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.listen(9000, () => console.log('Rodando na porta 9000'));