import { useState } from "react";

function App() {
  let [color,setColor]= useState("olive");

  return (
    <>
      <div className="bg-black w-full h-screen flex justify-center">
        <div className="text-white">
          <div className="flex flex-wrap m-3 rounded-3xl">
            <input id="name"></input>
            <button id="copy" className="bg-blue-800 px-4 py-2 rounded-3xl">Copy</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
