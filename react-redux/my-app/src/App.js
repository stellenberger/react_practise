import React from 'react';
import Ninjas from './components/Ninjas';

function App() {
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome!</p>
      <Ninjas name="Stephan" age="25" belt="black"/>
    </div>
  );
}

export default App;
