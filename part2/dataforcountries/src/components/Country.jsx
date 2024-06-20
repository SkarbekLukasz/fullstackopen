import {useEffect, useState} from 'react'
import countriesService from "../services/countriesService"

const Country = ({country}) => {
    const [weather, setWeather] = useState(null)
    const [loader, setLoader] = useState(true)
    const {name, capital, area, languages, flags, capitalInfo} = country

    useEffect(() => {
        countriesService.getCapitalWeather(capitalInfo.latlng).then(response => {
            setWeather(response)
            setLoader(false)
        })
    }, [country])
    
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
        <h2>Weather in {capital}</h2>
        {loader ? <p>Data is loading...</p> : 
            <div>
                <p>temperature {weather.main.temp} &#176;C</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                <p>wind {weather.wind.speed} m/s</p>
            </div>
                }
    </div>
    )
}

export default Country