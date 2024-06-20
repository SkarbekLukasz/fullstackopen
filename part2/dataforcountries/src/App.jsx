import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import Results from './components/Results'
import countriesService from './services/countriesService'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countriesService.getAllCountries().then(countriesData => setCountries(countriesData))
  }, [])

  const handleSearchBarChange = (event) => {
    setSelectedCountry(null)
    setSearchValue(event.target.value)
  }

  const handleShowCountry = (entry) => {
    setSelectedCountry(entry)
  }

  return(
    <div>
      <SearchBar handleChange={handleSearchBarChange}/>
      <Results countries={countries} keyword={searchValue} handleShowCountry={handleShowCountry} selectedCountry={selectedCountry}/>
    </div>
  )
}

export default App
