import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

const App = () => {
  
  const [countrySearch, setCountrySearch] = useState([])
  
  const hook = () => {
    console.log('effect')
    axios.get("https://restcountries.eu/rest/v2/name/eesti").then(response => {
      console.log(response.data)
      setCountrySearch(response.data)
    })
  }

  useEffect(hook, [])
  console.log(countrySearch, '___')
  return (
    <div>
      <h1>{countrySearch.map((country => country.name))}</h1>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));


