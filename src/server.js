//const express = require('express')

import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
  res.send('Get na rota /user')
})

app.post('/user', (req, res) => {
  res.send('Post na rota /user')
})

app.patch('/user', (req, res) => {
  res.send('Patch na rota /user')
})

app.put('/user', (req, res) => {
  res.send('Put na rota /user')
})

app.delete('/user', (req, res) => {
  res.send('Delete na rota /user')
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
