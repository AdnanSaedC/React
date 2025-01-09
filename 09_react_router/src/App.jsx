import { useState } from 'react'
import Header from '../components/header'
import Home from "../components/home"
import Footer from '../components/footer'
import About from '../components/about'
// import './App.css'

//since we are dealing with react-router-dom'
//we need outlet for output

import {Outlet} from 'react-router-dom'

function App() {

  return (
    <>
      <Header /> 
      <Outlet/>
      {/* here what we are doing is we are keep the 
      the header amd the footer same for every page outthere
      just the main content will differ */}
      <Footer/>
    </>
  )
}

export default App
