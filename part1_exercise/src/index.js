import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({courseName}) => {
  return (
    <>
      <h1>{courseName}</h1>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>{part.name}</li>
        )
      )}
      </ul>
      <Total parts={parts}/>
    </>
  )
}

const Total = ({parts}) => {
  const numberOfExercises = []
  parts.map(part => numberOfExercises.push(part.exercises))
  return (
    <>
      <p>Number of exercises {numberOfExercises.reduce((total, num) => total + num)} </p>
    </>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header courseName={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id:1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  } 

  return (
    <Course course={course} />
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

