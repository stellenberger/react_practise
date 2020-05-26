import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

const DisplayCountryList = ({countryList}) => {
  return (
    <div>
      {countryList.map((country => <p>{country.name}</p>))}
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
        <DisplayCountry countryList={countryList}/> : <DisplayCountryList countryList={countryList}/>}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
