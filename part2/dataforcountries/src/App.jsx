import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import Results from './components/Results'
import countriesService from './services/countriesService'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesService.getAllCountries().then(countriesData => setCountries(countriesData))
  }, [])

  const handleSearchBarChange = (event) => {
    setSearchValue(event.target.value)
  }

  return(
    <div>
      <SearchBar handleChange={handleSearchBarChange}/>
      <Results countries={countries} keyword={searchValue}/>
    </div>
  )
}

export default App
