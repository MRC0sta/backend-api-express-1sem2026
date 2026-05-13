//const express = require('express')

import express from 'express'
import userRouter from "./routers/userRouter.js"
import publicationRouter from "./routers/publicationRouter.js"
import { logger } from './middlewares/logger.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { error404 } from './middlewares/error404.js'

const app = express()
const port = 3000

app.use(logger)
app.use(express.json()) // Middleware para parsear JSON no corpo das requisições
// req.body -> Acessar os dados enviados no corpo da requisição

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/user', userRouter)
app.use('/publication', publicationRouter)

app.use(error404)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})