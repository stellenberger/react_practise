import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

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
      <div>{countryList.map((country => <p>{country.name}</p>))}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
