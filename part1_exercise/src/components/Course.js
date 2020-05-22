import React from 'react';



const Total = ({parts}) => {
  const numberOfExercises = []
  parts.map(part => numberOfExercises.push(part.exercises))
  return (
    <>
      <p>Number of exercises {numberOfExercises.reduce((total, num) => total + num)} </p>
    </>
  )
}

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

const Course = ({course}) => {
  return (
    <div>
      <Header courseName={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}



export default Course