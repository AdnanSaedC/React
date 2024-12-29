import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

//now lets see what are the ways we can give things to react

function Adnan(){
  return(
    <h1>fellow bro Adnan</h1>
  )
}

//another way

const newElement=(
  <h1>this is jsx way <br/>do you like it</h1>
)

//now react works behind the scene
//the last parameter is variables
//the first three are mandatory
let username="Adnan0042n"
let ReactBackend=React.createElement(
  'a',{
    href:"https://www.google.com",target:"_blank"
  },
  'now plain text',
  username
)


createRoot(document.getElementById('root')).render(
  //<>
    //for functions
    //<Adnan />
     // <App />
    //for react objects this is the syntax
    //they are different from javaScript Syntax
    //newElement 
    //just remove those angular braces everything will work fine
    ReactBackend

    //another way because its just a function
    //Adnan()
  //</>
  
)
