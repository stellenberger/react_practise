import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  const decreaseByOne = () => setCounter(counter - 1)

  const setToZero = () => setCounter(0)
  return (
    <>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="Plus" />
      <Button handleClick={decreaseByOne} text="Minus" />
      <Button handleClick={setToZero} text="Zero" />
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

