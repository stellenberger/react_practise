import React from 'react';
import Ninjas from './components/Ninjas';

class App extends React.Component {
  state = {
    ninjas: [
      { name: 'Stephan', age: 25, belt: 'black', id: 1},
      { name: 'Pepsi', age: 43, belt: 'green', id: 2},
      { name: 'Gollum', age: 19, belt: 'pink', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
