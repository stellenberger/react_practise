import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} from the hello const, you are {props.age} years old</p>
    </div>
  )
}
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const age = 10
  const name = "Pepsi"

  return (
    <>
      <p>Hello world, the time is {now.toString()}</p>
      <Hello name="Daisy" age="54"/>
      <Hello name="Stephan" age="24"/>
      <Hello name={name} age={age}/>
      <p>{a} plus {b} is {a + b}</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
