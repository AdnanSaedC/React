import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import Comp from './components/Comp.jsx'
function App() {
  const [count, setCount] = useState(0)

  //if u want to pass array or obj u have to do this way
  let array = [4,54,5]

  return (
    <>
      <h1 className='text-3xl'>React with tailwind</h1>
      <Card/>{"  "}
      <Comp/>{"     "}
      <Comp useranme = "hassan"  myArr = {array}/>
    </>
  )
}

export default App
