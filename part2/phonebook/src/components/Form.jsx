const Form = ({handleNameChange, handleNumberChange, handleFormSubmit}) => {
    return(
      <div>
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

  export default Form