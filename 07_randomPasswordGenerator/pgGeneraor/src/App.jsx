import { useState ,useCallback, useEffect ,useRef } from "react";

//first lets understand why we use usecallback and useEffect hooks in the first place

/** useCallback this is used to prevent the function being executed from the strach each time
 * why we give paramters here while recreting the function the hook will utilize
 * the latest value 
 * 
 * if you are calculating interest based on different value 
 * this function helps to just to the calculation which is needed onlyu for this case
 * 
 * for example lets say we have to multiply xyz
 * and z changes here each time
 * 
 * this function wont multiply xy each time it is fixed it will multiply only with z 
 * when needed
 * 
 * z is the parameter so that we can get the new value
 * 
 * useEffect is run a function whenever there is a change in the parameter
 * 
 */


function App() {
  let [length,setlength]=useState(8);
  let [numAllowed,setNumAllowd]=useState(false);
  let [charAllowed,setCharAllowed]=useState(false);

  //since we dont dont know the password
  let [password,setPassword]=useState("");

  //now we need to copy the content of the input field
  //for that we need password field reference for that purpose only we have 
  //useRef hook here
  //this is used to just tell the user that stuff ahs been completed

  let passwordValue=useRef(null);
  let passwordCopyToClipboard=useCallback(()=>{
    passwordValue.current?.select();
    //here what we are doing is selecting optionally using '?'
    //if the value is not null then select
    //.current gives the current value
    window.navigator.clipboard.writeText(password)

    //for a specic value get the value and using for loop extract that part only
    //it will be great

    //for specific range
    passwordValue.current?.setSelectionRange(0,5);
    //this is valid for just highlighting a specigic range specific range only
  },[password])
  //we are using useCallback because we want to store stuff
  //in then canche memory if something changes in the parameter then use cache memory for
  //optimization
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

    for(let i=0;i<length;i++){
      let value=Math.floor(Math.random()*str.length);
      let char=str.charAt(value);
      initialPassword+=char;
    }
    setPassword(initialPassword);

  },[length,numAllowed
    ,charAllowed,setPassword])
    

    //in react we can't call function directly
    //so use an hook called useEffect
    // passwordGeneraotor();
    

    //here we are telling that if any of the parameter gets
    //change call this function
    useEffect(
      ()=>{passwordGeneraotor()},[numAllowed,charAllowed,length]
    )

  return (
    <>
      <div className="bg-black w-full h-screen flex justify-center">
        <div className="text-white m-2">
          <div className="flex flex-wrap m-3 ">
            <input id="name" value={password} readOnly
            ref={passwordValue}
            className="w-[450px] text-black rounded-tl-lg rounded-bl-lg"></input>
            <button id="copy"
            onClick={passwordCopyToClipboard}
            className="bg-blue-800 px-4 rounded-br-lg py-2 rounded-tr-lg">Copy</button>
          </div>
          <div className="flex flex-wrap m-2">
            <input type="range" max={100} id="range" className="mx-2"
            onChange={(event)=>{setlength(event.target.value)}}
            /><label className="mx-2">Length: {length}</label>
            <input type="checkbox" className="mx-2" id="number"

            //this is wrong since it will numAllowed as event name here
            // onChange={(numAllowed)=>{setNumAllowd(!numAllowed)}}
            onChange={()=>{setNumAllowd((numAllowed)=>{return !numAllowed})}}
            />number
            <input type="checkbox" className="mx-2" id="specialChracter"
            onChange={()=>{setCharAllowed((charAllowed)=>{return !charAllowed})}}
            />Special Character
          </div>
        </div>
      </div>
    </>
  )
}

export default App
