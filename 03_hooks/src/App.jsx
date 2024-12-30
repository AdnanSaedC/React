import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //here the value in the parameter is the initial value which we want
  //to give the counter variable and setCounter is a method which is used
  //update the value
  let [counter,setCounter]=useState(15);
  return (
    <>
      <h1>Welcome </h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={()=>{
        // counter++;
        // console.log("value incremented")
        //the value of counter is not incrementing
        //thats what we are going to solve

        //because in react you canot decide whats going to happen
        //in the UI it done by react thats why that was not working

        //heres where hooks comes into picture they are used to update the UI
        //that is the only possible way as of now

        //each hook does only one job
        
        //here were useStates comes into picture they are used to transfer
        //the changes into the complete UI

        //it returns two things in array format
        //the first one is the variable and the other one is a 
        //function which is used to change the variable
        setCounter(counter+1);

        //wallah we made it this is hook
        //which is nothing but a way to update the UI
        //here useState is a hook
      }}
      >+</button>
      <button 
      onClick={()=>{
        if(counter>0){

          setCounter(counter-1);
        }
      }}
      >-</button>
    </>
  )
}

export default App
