import { useState, useEffect } from 'react'
import Form from './components/Form.jsx'
import Numbers from './components/Numbers'
import SearchField from './components/SearchField.jsx'
import personsService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState('')

  useEffect(() => {
    personsService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  const handleNameChange = (event) => {
    const inputChange = event.target.value
    setNewName(inputChange)
  }

  const handleNumberChange = (event) => {
    const inputChange = event.target.value
    setNewNumber(inputChange)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {name: newName, number: newNumber}
      personsService.save(newPerson).then(savedPerson => setPersons(persons.concat(savedPerson)))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleFilterChange = (event) => {
    const inputChange = event.target.value
    setPersonFilter(inputChange)
  }

  const handleDelete = (id, name) => {
    if(window.confirm(`Delete ${name}`)) {
      personsService.deletePerson(id).then(deleted => {
        setPersons(persons.filter(person => person.id != deleted.id))
        alert(`${deleted.name} deleted sucessfully!`)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <Form handleNameChange={handleNameChange} handleFormSubmit={handleFormSubmit} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Numbers persons={persons} personFilter={personFilter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App