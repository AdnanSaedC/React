import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

const variable = (
  <a href='https://www.google.com'>visit google</a>
)

// const ourObject = {
//     type:"a",
//     props:{
//         href:"https://www.google.com"
//     },
//     Children:"click me to visit google.com"
// }

const newElement = React.createElement(
  'a', //this is the html tag
  {
     href:"https://www.google.com" //here we take the prop btwn html
  },
  'click me to visit google.com' //text
  //varibles are evaluated here anything in {} refer app.jsx
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App /> 
  //   {/* <App />
  //     is equal to App() in js and this format is for jsx
  //   */}
  // </StrictMode>
    // variable // you can uncomment this and also see 

    //the point here is react works when you give direct html
    //but the correct way is

    // newElement  

)
