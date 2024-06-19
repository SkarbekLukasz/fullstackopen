const Person = ({name, number, handleDelete}) => {
    return(
      <div>
        <p>{name} {number} <button onClick={handleDelete}>delete</button></p>
      </div>
    )
}

const Numbers = ({persons, personFilter, handleDelete}) => {
    const filteredPersons = personFilter === '' ? persons : persons.filter(filtered => filtered.name.toLowerCase().includes(personFilter.toLowerCase()))
    return(
      <div>
        {
            filteredPersons.map(person => <Person key={person.name} id={person.id} name={person.name} number={person.number} handleDelete={() => handleDelete(person.id, person.name)}/>)
        }
      </div>
    )
  }

  export default Numbers