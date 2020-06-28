import React from 'react';
import { Account } from './components/Account'
import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'


function App() {

  return (
    <Account>
      <SignUp/>
      <Login/>
    </Account>
  );
}

export default App;
