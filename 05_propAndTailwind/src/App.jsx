import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


let obj={
  age:16,
  gender:"male",
}
let myMarks=[1,2,3];

function App(props) {

  //props are nothing but parameters
  console.log("parameters: ",props);
  return (
    <>
    <h1 className='bg-red-600 text-black rounded-sm'>hello</h1>
    <Card name="Adnan" otherStuff={obj} marks={myMarks} />
    {/* //here we have to be very careful since javaScript and html has something in common */}
    {/* //thats why class is className here 
    class will also work very well here

    now adding entire tailwind code
    remember everything should be a closing tag like <img/> this
    
    traditional html,css,js is handled differently now 
    in react everything is integrated so that if one thing is used in
    some another place then changes should also reflect there

    so we r going to make everything as a component here thats why component folder 
    is intoduced
    */}
    </>
  )
}

export default App
