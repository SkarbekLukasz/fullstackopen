const Phonebook = ({handleNameChange, handleNumberChange, handleFormSubmit, handleFilterChange}) => {
    return(
      <div>
      <h2>Phonebook</h2>
        <div>
            filter shown with: <input onChange={handleFilterChange}/>
        </div>
      <h2>Add a new</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
            name: <input onChange={handleNameChange}/>
        </div>
        <div>
            number: <input onChange={handleNumberChange}/>
        </div>
        <div>
        <button type="submit">add</button>
        </div>
        </form>
        </div>
    )
  }

  export default Phonebook