import { useState } from 'react'
import UserContextProvider from './Context/userContextProvider'
import Login from '../components/login'
import Profile from '../components/profile'

//let me tell you what is happening here
//the entire code starts from main.jsx 

//and the we are coming to app.jsx

//them we are going to UserContextProvider

//see the rest of the story from userConetextProvider


//hello again hope you re coming from userContextProvider
//we are calling login Component

//in login we are using useConetxt function to get all the 
//reserved variables and then calliing them                                                            



function App() {

  return (
    <UserContextProvider>
      <h1>Adnan Saed</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
