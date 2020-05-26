import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
require('dotenv').config();

const DisplayCountryList = ({countryList, setCountrySearch}) => {
  return (
    <div>
      {countryList.map((country => 
        <p>
          {country.name}
          <button onClick={event => setCountrySearch(event.target.value)} value={country.name}>Show more...</button>
        </p>
      ))}
    </div>
  )
}

const DisplayWeather = ({capitalCity}) => {
  const [ weather, setWeather ] = useState(null)
  
  useEffect(() => {
    axios.get("http://api.weatherstack.com/current?access_key=" 
      + process.env.REACT_APP_API_KEY 
      + "&query=" 
      + capitalCity)
      .then(response => {
        console.log("storing the data")
      setWeather(response.data)
      console.log('data stored')
      console.log(response.data.current.observation_time)
    })
  }, [capitalCity])

  return (
    <div>
      {weather && <p>Weather: {weather.current.observation_time}</p>}
    </div>
  )
}

const DisplayCountry = ({countryList}) => {
  
  return (
    <div>
      <h1>Name: {countryList[0].name}</h1>
      <p>Capital: {countryList[0].capital}</p>
      <p>Region: {countryList[0].region}</p>
      <p>Population: {countryList[0].population}</p>
      <img src={countryList[0].flag} alt="" width="200px" height="auto"/>
      <DisplayWeather capitalCity={countryList[0].capital}/>
    </div>
  )
}

const App = () => {
  const [countrySearch, setCountrySearch] = useState('')
  const [countryList, setCountryList] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/name/" + countrySearch).then(response => {
      setCountryList(response.data)
    })
  }, [countrySearch])
  
  return (
    <div>
      <input value={countrySearch} onChange={event => setCountrySearch(event.target.value)}/>
      <div>{countryList.length === 1 ? 
        <DisplayCountry countryList={countryList}/> : <DisplayCountryList countryList={countryList} setCountrySearch={setCountrySearch}/>}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
