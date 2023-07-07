const express = require('express');
const cors = require('cors')

const { 
  handleCreateData, 
  handleReadData, 
  handleReadDataById,
  handleUpdateData,
  handleDeleteData
} = require('./controller')


const app = express()
app.use(cors())
const port = 8080


app.use(express.json()) // Con esto podemos recibir un body

//CRUD

app.get('/healthcheck', (_, res) => {
  
  res.status(200).send('OK')  
})

// Create - POST
app.post('/products', handleCreateData)

//Read - GET
app.get('/products', handleReadData)

//Read - GET:id
app.get('/products/:id', handleReadDataById)

//Update - PUT
app.put('/products/:id', handleUpdateData)

app.delete('/products/:id', handleDeleteData)

app.listen(port, () => {
  console.log(`Successfully running at http://localhost:${port}`)
})