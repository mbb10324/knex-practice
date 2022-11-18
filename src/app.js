const express = require('express');
const app = express();
const port = 3030;

const knex = require('knex')(require('../knexfile.js')["development"]);

app.get('/', (request, response) => {
    response.send('Application up and running.')
})

app.listen(port, () => {
    console.log('Your knex and express application are running succesfully')
})

app.get('/pets', (request, response) => {
    knex('pet')
    .select('*')
    .then(pets => {
        var petNames = pets.map(pet => pet.name)
        response.json(petNames);
    })
})
