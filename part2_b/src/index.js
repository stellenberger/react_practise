import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Persons = ({persons, setPersons}) => {
  return (
    <div>
      {persons.map((person) => <li key={person.id}>{person.name}: {person.number}</li>)}
    </div>
  )
}
const Filter = ({persons}) => {
  const [ filterResults, setFilterResults ] = useState([])

  const handleFilterResults = (event) => {
    console.log(event.target.value)
    setFilterResults(persons.filter(function(person) {
      return person.name.includes(event.target.value) 
    }))
    console.log(filterResults)
  }

  return (
    <div>
      Search by name:
      <input type="text" onChange={handleFilterResults}/>
      {filterResults.map((result) => <li key={result.id}>{result.name}: {result.number}</li>)}
    </div>
  )
}

const NewPersonForm = ({persons, setPersons}) => {
  const [ newNumber, setNewNumber ] = useState('')

  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if(!checkPersonExists()) {
      alert(`${newName} is already on the list`)
      setNewName('')
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const checkPersonExists = () => {
    let boolean 
    persons.filter(function(person) {
      if(person.name === newName) {
        boolean = false
      } else {
        boolean = true
      }
    })
    return boolean
  }

  return (
    <form onSubmit={addName}>
      <div>
        Name: <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    {name: 'Arto Hellas', number: '999', id: 0}
  ])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}/>
      <NewPersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

