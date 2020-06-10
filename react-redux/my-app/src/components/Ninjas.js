import React from 'react';

const Ninjas = (props) => {
  const { ninjas } = props
  const ninjaList = ninjas.map(ninja => {
    const { name, age, belt, id } = ninja
    return (
      <div className="ninja" key={id}>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Belt: {belt}</div>
      </div>
    )
  })
  return(
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}


export default Ninjas