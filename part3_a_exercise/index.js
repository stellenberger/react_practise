const express = require('express')
const app = express()

app.use(express.json())

let phonebook = [
  {
    name: "Arto Hellas",
    number: '999',
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: '999',
    id: 2
  },
  {
    name: "Dan Abramov",
    number: '999',
    id: 3
  },
  {
    name: "Arto Hellas",
    number: 'Mary Poppendieck',
    id: 4
  },
]

app.get('/info', (request, response) => {
  response.send(
    `<p>The phonebook has ${phonebook.length} people in it</p><p>${Date()}</p>`
    )
})
app.get('/api/phonebook', (request, response) => {
  response.json(phonebook)
})


app.post('/api/phonebook', (request, response) => {

})


app.delete('/api/phonebook/:id', (request, response) => {

})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})