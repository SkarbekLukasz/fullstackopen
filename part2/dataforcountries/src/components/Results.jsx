const Results = ({countries, keyword}) => {

    if(keyword === '') return null

    const processData = (countries, keyword) => countries.filter(country => country.name.common.toLowerCase().includes(keyword.toLowerCase()))
    const filteredCountries = processData(countries, keyword)

    if(filteredCountries.length > 10) {
        return(
            <p>Too many matches, specify another filter</p>
        )
    } else if(filteredCountries.length <= 10 && filteredCountries.length > 1) {
        return(
            <div>
                {filteredCountries.map(entry => <p key={entry.name.common}>{entry.name.common}</p>)}
            </div>
            
        )
    } else if(filteredCountries.length === 1){
        const { name, capital, area, languages, flags } = filteredCountries[0]
        return(
            <div>
                <h2>{name.common}</h2>
                <p>capital {capital}</p>
                <p>area {area}</p>
                <h3>languages</h3>
                <ul>
                    {Object.entries(languages)
                    .map(([key, value]) => (<li key={key}>{value}</li>))}
                </ul>
                <br/>
                <img src={flags.png} alt="Flag" style={{maxWidth: 200, maxHeight: 200}}/>
            </div>
        )
    } else {
        return(
            <p>No countries found</p>
        )
    }
}

export default Results