import React from 'react';

// this is called a UI component as it doesnt have state, and its 
// data is passed down as props.
const Ninjas = ({ninjas, deleteNinja}) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
        </div>
    ) : null;
  })
  return(
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}


export default Ninjas