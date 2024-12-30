import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-red-600 text-black rounded-sm'>hello</h1>
    <Card />
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
