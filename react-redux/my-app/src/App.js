import React from 'react';
import Ninjas from './components/Ninjas';
import AddNinja from './components/AddNinja'

// this is called a container component as it has state
class App extends React.Component {
  state = {
    ninjas: [
      { name: 'Stephan', age: 25, belt: 'black', id: 1},
      { name: 'Pepsi', age: 43, belt: 'green', id: 2},
      { name: 'Gollum', age: 19, belt: 'pink', id: 3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
