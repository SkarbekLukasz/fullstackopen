import { useState } from 'react'
import Phonebook from './components/Phonebook'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInputChange = (event) => {
    const inputChange = event.target.value
    setNewName(inputChange)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {name: newName}
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }

  return (
    <div>
      <Phonebook handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit}/>
      <Numbers persons={persons}/>
    </div>
  )
}

export default App