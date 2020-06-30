import React, { useState } from 'react';

function App() {



  const [secretName, setSecretName] = useState('');

  const handleOnChange = (e) => {
    setSecretName(e.target.value)
    console.log(secretName)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('hello from onSubmit')
    
  }
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Input your secret name!</label><br/>
        <input type="text" onChange={handleOnChange} value={secretName}/><br/>
        <button type='submit'>Submit this form</button>
      </form>
    </div>
  );
}

export default App;
