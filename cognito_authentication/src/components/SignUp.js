import React, { useState } from 'react';
import UserPool from '../UserPool'


function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
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

export default SignUp;
