import { useState } from 'react'
import Form from './components/Form.jsx'
import Numbers from './components/Numbers'
import SearchField from './components/SearchField.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState('')

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
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleFilterChange = (event) => {
    const inputChange = event.target.value
    setPersonFilter(inputChange)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <Form handleNameChange={handleNameChange} handleFormSubmit={handleFormSubmit} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Numbers persons={persons} personFilter={personFilter}/>
    </div>
  )
}

export default App