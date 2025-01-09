import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from '../components/home.jsx'
import About from '../components/about.jsx'
import Contact from '../components/contact.jsx'
import User from '../components/user.jsx'
import Github ,{fetchApiWhenHover} from '../components/github.jsx'

//since we are dealing with react-router-dom'
//we need outlet for output
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

// const router=createBrowserRouter([
//   //here we dump every object which we need
//   {
//     path:'/',
//     element:<App/>,
//     // here we are dealing this the main thing whivh we want 
//     //if something gets add to the url then go into the children
//     children:[
//       {
//       path:"/",
//       element:<Home/>
//       },
//       {
//         //if the link is empty just / then load home
//         //if after / about is there then load about page
//       path:"about",
//       element:<About/>
//       }
//   ]
//   }
// ])

//another and easy way
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>} loader={fetchApiWhenHover}/>
      {/* look '/:' is neccesaary and userid should be in smallCase */}
      {/* the url should be user/YourName  /: is used to separate them*/}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* router is a prop king of parameter */}
    <RouterProvider router={router}/>
  </StrictMode>,
)

//lets see why we used react router dom in the first place
//before that you need to know what is asyn await
//here is brief intro about it
/**
 * Async makes a functionreturn for a promise
 * where as await makes a aysnc function wait for a promise
 * 
 * await->async
 * async function1(){
 * let variable=await function2(){} it is defined earlier
 * the function 2 will return a promise then only the execution will resume
 * 
 * function2 contains a promise 
 * let p1=new Promise((resolve,reject)=>{
 *    if(true){
 * resolve(xyz)}
 * else{
 * reject(xyz
 * )}
 * })
 * }
 * 
 * we use react router dom because when you hover around the li 
 * then itself it starts calling the api
 * making the process much smother
 */