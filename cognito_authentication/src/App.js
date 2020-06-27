import React, { useState } from 'react';
import './App.css';
import { CognitoUserPool } from 'amazon-cognito-identity-js'
// downloaded using npm i amazon-cognito-identity-js

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const poolData = {
    UserPoolId: process.env.REACT_APP_USER_ID,
    ClientId: process.env.REACT_APP_CLIENT_ID
  }

  const UserPool = new CognitoUserPool(poolData)
  
  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    })
  }
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input 
          value={email}
          onChange={event => setEmail(event.target.value)}  
        />

        <input 
          value={password}
          onChange={event => setPassword(event.target.value)}  
        />

        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
