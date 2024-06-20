import Country from "./Country"

const Results = ({countries, keyword, handleShowCountry, selectedCountry}) => {

    if(keyword === '') return null

    if(selectedCountry != null) {
        return(
            <Country country={selectedCountry}/>
        )
    }

    const processData = (countries, keyword) => countries.filter(country => country.name.common.toLowerCase().includes(keyword.toLowerCase()))
    const filteredCountries = processData(countries, keyword)

    if(filteredCountries.length > 10) {
        return(
            <p>Too many matches, specify another filter</p>
        )
    } else if(filteredCountries.length <= 10 && filteredCountries.length > 1) {
        return(
            <div>
                {filteredCountries.map(entry => <p key={entry.name.common}>{entry.name.common} <button key={entry.name.common} onClick={() => handleShowCountry(entry)}>show</button></p>)}
            </div>
            
        )
    } else if(filteredCountries.length === 1){
        return(
            <Country country={filteredCountries[0]}/>
        )
    } else {
        return(
            <p>No countries found</p>
        )
    }
}

export default Results