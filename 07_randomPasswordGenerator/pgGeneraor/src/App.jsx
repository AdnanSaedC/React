import { useState ,useCallback } from "react";

function App() {
  let [length,setlength]=useState(8);
  let [numAllowed,setNumAllowd]=useState(true);
  let [charAllowed,setCharAllowed]=useState(true);

  //since we dont dont know the password
  let [password,setPassword]=useState("");
  

  //useCallback hook takes two function and anotherOne dependencies
  //they are just parameters
  let passwordGeneraotor = useCallback(()=>{
    let initialPassword="";
    let str="ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed){
      str+="1234567890";
    }
    if(charAllowed){
      str+="!@#$%^&*?";
    }

    for(i=0;i<str.length;i++){
      let value=Math.floor(Math.random()*str.length);
      let char=str.charAt(value);
      initialPassword+=char;
    }
    setPassword(initialPassword);

  },[length,numAllowed
    ,charAllowed,setNumAllowd
  ])
  return (
    <>
      <div className="bg-black w-full h-screen flex justify-center">
        <div className="text-white ">
          <div className="flex flex-wrap m-3 ">
            <input id="name" value={password}  className=" rounded-tl-lg rounded-bl-lg"></input>
            <button id="copy" className="bg-blue-800 px-4 rounded-br-lg py-2 rounded-tr-lg">Copy</button>
          </div>
          <div className="flex flex-wrap">
            <input type="range" max={100} id="range"
            onChange={(event)=>{setlength(event.target.value)}}
            /><label>Length: {length}</label>
            <input type="checkbox" id="number"/>number
            <input type="checkbox" id="specialChracter"/>Special Character
          </div>
        </div>
      </div>
    </>
  )
}

export default App
