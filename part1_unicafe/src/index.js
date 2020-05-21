import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, feedback}) => {
  return (
    <div>
      <button onClick={onClick}>{feedback}</button>
    </div>
  )
}

const Results = ({good, neutral, bad}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addPositiveFeedback = () => {
    setGood(good + 1)
  }

  const addNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const addNegativeFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h3>Hello, welcome to Unicafe Feedback. Select one of the options below</h3>
      <Button onClick={addPositiveFeedback} feedback="Good"/>
      <Button onClick={addNeutralFeedback} feedback="Neutral"/>
      <Button onClick={addNegativeFeedback} feedback="Bad"/>
      <Results good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

