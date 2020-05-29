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

app.get('/api/phonebook/:id', (request, response) => {
  const id = Number(request.params.id)
  const phonebook = phonebook.find(number => number.id === id)
  if(note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})


app.post('/api/phonebook', (request, response) => {
  const body = request.body

  if(!body.name) {
    return response.status(400).json({
      error: 'name missing'
    })
  } else if (!body.number) {
    return response.status(400).json({
      error: 'number missing'
    })
  }

  const number = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  phonebook = phonebook.concat(number)

  response.json(number)
})

const generateId = () => {
  return Math.floor(Math.random() * 100000)
}


app.delete('/api/phonebook/:id', (request, response) => {
  const id = Number(request.params.id)
  phonebook = phonebook.filter(number => number.id !== id)

  response.status(204).end()
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})