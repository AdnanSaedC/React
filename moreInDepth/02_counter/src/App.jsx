import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let withoutReact = 15
  let withoutReactAdd = ()=>{
    
    withoutReact = withoutReact+1
    console.log(withoutReact)
  }

  //with react
  let [withReact,setWithReact] = useState(0) //initail value
  const [batchVariable,setBatchVariable] = useState(0)

  let withReactAdd = ()=>{
    setWithReact(withReact+1)
    setWithReact(withReact+1)
    setWithReact(withReact+1)
    setWithReact(withReact+1)
    setWithReact(withReact+1)   //only one value will get updated
  }

  let batchAdd = ()=>{
    setBatchVariable((prevBatchVariable)=>prevBatchVariable + 1)
    setBatchVariable((prevBatchVariable)=>prevBatchVariable + 1)
    setBatchVariable((prevBatchVariable)=>prevBatchVariable + 1)
    setBatchVariable((prevBatchVariable)=>prevBatchVariable + 1)
  }
  
  return (
    <>
      <h1>Without react</h1>{"  "}{withoutReact}
      <button onClick={withoutReactAdd}>Add counter</button> {"  "}{withoutReact}
      <p>NO updation</p>
      <h1>with react</h1>
      <h1>Without react</h1>{"  "}{withReact}
      <button onClick={withReactAdd}>Add counter</button> {"  "}{withReact}
      <p>the ui is getting updated</p>
      <h1>now with batch</h1>{"  "}{batchVariable}
      <button onClick={batchAdd}>Add counter</button> {"  "}{batchVariable}
      <p>here u can increase four time prev not possible</p>
    </>
  )
}

export default App
