import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import phonebookService from './services/phonebook'
import './index.css'


const Persons = ({persons, setPersons}) => {
  const deletePerson = (person) => {
    phonebookService
      .destroy(person)
      .then(setPersons(persons.filter(p => p.id !== person.id)))
    alert(`You deleted ${person.name} from the Phonebook`)
  }
  
  return (
    <div>
      {persons.map((person) => 
      <li key={person.id}>
        {person.name}: {person.number} <button onClick={() => deletePerson(person)}>Delete</button>
      </li>)}
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

const NewPersonForm = ({persons, setPersons, setMessage}) => {
  const [ newNumber, setNewNumber ] = useState('')
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if(!checkPersonExists()) {
      alert(`${newName} is already on the list. Would you like to replace the old number with a new one?`)
      const originalPerson = persons.find(person => person.name === newName)
      const changedPerson = { ...originalPerson, number: newNumber}
      phonebookService
        .update(originalPerson.id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.name !== newName ? person : returnedPerson))
        })
      setNewName('')
      setNewNumber('')
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons[persons.length - 1].id + 1
      }
      phonebookService
        .create(nameObject)
        .then(returnedName => {
          setPersons(persons.concat(returnedName))
          setNewName('')
          setNewNumber('')
          setMessage(`You have added ${newName} into the phonebook`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        }).catch(error => {
          setMessage(`the name '${newName}' was already deleted from the server`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
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

const Notification = ({ message }) => {
  if(message === null) {
    return null
  }
  return (
    <div>
      {message}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ message, setMessage ] = useState(null) 
  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPhonebook => setPersons(initialPhonebook))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}/>
      <NewPersonForm persons={persons} setPersons={setPersons} setMessage={setMessage}/>
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} />
      <Notification message={message}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

