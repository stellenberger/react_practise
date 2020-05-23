import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [ persons, setPersons ] = useState([
    {name: 'Arto Hellas', number: '999', id: 0}
  ])

  const [ newNumber, setNewNumber ] = useState('')

  const [ newName, setNewName ] = useState('')

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

  const addName = (event) => {
    event.preventDefault()
    if(!checkPersonExists()) {
      console.log('This returned false and worked')
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map((person) => <li key={person.id}>{person.name}: {person.number}</li>)}
    </div>
  )

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

