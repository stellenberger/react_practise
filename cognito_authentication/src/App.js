import React from 'react';
import './App.css';
import { CognitoUserPool } from 'amazon-cognito-identity-js'
// downloaded using npm i amazon-cognito-identity-js

function App() {
  const poolData = {
    UserPoolId: '',
    ClientId: process.env.REACT_APP_CLIENT_ID
  }

  console.log('hello', process.env.REACT_APP_CLIENT_ID)
  
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
