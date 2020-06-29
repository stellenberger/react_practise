import React, { useState } from 'react';

function App() {
  const [secretName, setSecretName] = useState('');

  
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('hello from onSubmit')
  }
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <label>Input your secret name!</label><br/>
        <input type="text"/><br/>
        <button type='submit'>Submit this form</button>
      </form>
    </div>
  );
}

export default App;
