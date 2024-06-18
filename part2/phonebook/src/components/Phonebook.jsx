const Phonebook = ({handleInputChange, handleFormSubmit}) => {
    return(
      <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
         <div>
            name: <input onChange={handleInputChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    </div>
    )
  }

  export default Phonebook