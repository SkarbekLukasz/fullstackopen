const Person = ({name, number}) => {
    return(
        <p>{name} {number}</p>
    )
}

const Numbers = ({persons, personFilter}) => {
    const filteredPersons = personFilter === '' ? persons : persons.filter(filtered => filtered.name.toLowerCase().includes(personFilter.toLowerCase()))
    return(
      <div>
        {
            filteredPersons.map(person => <Person key={person.name} name={person.name} number={person.number}/>)
        }
      </div>
    )
  }

  export default Numbers