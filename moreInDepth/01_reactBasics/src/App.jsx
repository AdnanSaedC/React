import { useState } from 'react'
import Youtube from './youtube.jsx'


function App() {
  const username = "adnan"
  return (
    <>
      <div>
        <Youtube/>
        <h1>Vite + React {username}</h1>
      </div>
    </>
  )
}

export default App
