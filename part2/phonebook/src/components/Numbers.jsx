const Numbers = ({persons, personFilter}) => {
    const filteredPersons = personFilter === '' ? persons : persons.filter(filtered => filtered.name.toLowerCase().includes(personFilter.toLowerCase()))
    return(
      <div>
        <h2>Numbers</h2>
        {
            filteredPersons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
        }
      </div>
    )
  }

  export default Numbers