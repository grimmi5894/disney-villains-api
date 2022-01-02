/* eslint-disable no-console */
const bodyParser = require('body-parser')
const express = require('express')
const { getAllVillains, getVillainBySlug, saveNewVillain } = require('./controllers/villains')

const app = express()

app.get('/villains', getAllVillains)

app.get('/villains/:slug', getVillainBySlug)

app.post('/villains', bodyParser.json(), saveNewVillain)

app.listen(1337, () => {
  console.log('Listening on port 1337')
})
