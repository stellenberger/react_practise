import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <ul>
      <li>{note.content}</li>
      <button onClick={toggleImportance}>{label}</button>
    </ul>
  )
}

export default Note