import { useState } from "react";

function App() {
  let [color,setColor]= useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="justify-center w-full flex flex-wrap">
          <div className="m-5 bg-white px-3 py-2 rounded-3xl">

        <button className="bg-red-500  outline-none px-5 py-3 rounded-3xl text-white mx-2" 
        onClick={()=>{setColor('red')}}
        >Red</button>
        <button className="bg-blue-500 px-5 py-3 rounded-3xl text-white mx-2" 
        onClick={()=>{setColor('blue')}}
        >blue</button>
        <button className="bg-green-500 px-5 py-3 rounded-3xl text-white mx-2" 
        onClick={()=>{setColor('green')}}
        >green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
