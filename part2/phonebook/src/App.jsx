import { useState, useEffect } from 'react'
import Form from './components/Form.jsx'
import Numbers from './components/Numbers'
import SearchField from './components/SearchField.jsx'
import Notification from './components/Notification.jsx'
import personsService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

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

  const showNotificationMessage = (name, message) => {
    const notification = `${message} ${name}`
    setSuccessMessage(notification)
    setTimeout(() => setSuccessMessage(''), 5000)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name === newName)
        const updatePerson = {...person, number: newNumber}
        personsService.update(updatePerson).then(updatedPerson => setPersons(persons.map(person => person.name !== updatedPerson.name ? person : updatedPerson)))
        showNotificationMessage(newName, 'Edited')
        setNewName('')
        setNewNumber('')
      }
    } else {
      const newPerson = {name: newName, number: newNumber}
      personsService.save(newPerson).then(savedPerson => setPersons(persons.concat(savedPerson)))
      showNotificationMessage(newName, 'Added')
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
      <Notification message={successMessage}/>
      <SearchField handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <Form handleNameChange={handleNameChange} handleFormSubmit={handleFormSubmit} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Numbers persons={persons} personFilter={personFilter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App