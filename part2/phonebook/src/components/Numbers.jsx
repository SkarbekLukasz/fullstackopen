const Person = ({name, number}) => {
    return(
        <p key={name}>{name} {number}</p>
    )
}

const Numbers = ({persons, personFilter}) => {
    const filteredPersons = personFilter === '' ? persons : persons.filter(filtered => filtered.name.toLowerCase().includes(personFilter.toLowerCase()))
    return(
      <div>
        <h2>Numbers</h2>
        {
            filteredPersons.map(person => <Person name={person.name} number={person.number}/>)
        }
      </div>
    )
  }

  export default Numbers