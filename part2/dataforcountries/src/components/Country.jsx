const Country = ({country}) => {
    const {name, capital, area, languages, flags} = country
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
}

export default Country