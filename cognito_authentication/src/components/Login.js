import React, { useState, useContext } from 'react';
import { AccountContext } from './Account'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { authenticate } = useContext(AccountContext)
  
  
  const onSubmit = event => {
    event.preventDefault();

    authenticate(email, password)
      .then(data => {
        console.log('Logged in!', data)
      })
      .catch(err => {
        console.error('Failed to log in!', err)
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
