import { useState , useCallback , useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [isNumAllowed,setisNumAllowed]=useState(false)
  const [isCharAllowed,setisCharAllowed]=useState(false)
  const [password,setPassword]=useState('')


  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(isNumAllowed) {
      console.log("num")
      string += "0123456789"}
    if(isCharAllowed) {string += "!@#$%^&*()"}

    for(let i= 1;i<length;i++){
        let index = Math.floor((Math.random())*string.length + 1 )
        pass += string.charAt(index)
    }
    setPassword(pass)
  },[length,isCharAllowed,isNumAllowed])

  // refer 00_hooks to understand more about this hooks
  useEffect(()=>{
    passwordGenerator()
  },[length,isCharAllowed,isNumAllowed])

  const passwordRef = useRef(null)
  //here we are storing null as initial values

  const copyPassword = useCallback( ()=>{
    //this is to copy password
    window.navigator.clipboard.writeText(password);

    //this is to highlight password
    //passwordRef is now has actual DOM element
    passwordRef.current?.select();
  })
  
  return (
    <>
        <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-6">
          <h1 className="text-center">Password Generator</h1>
          
          <div className="flex gap-2">
            <input
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              type='text'
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition"
              onClick={copyPassword}
            >
              copy
            </button>
          </div>

          <div className="space-y-3">
            <input
              type="range"
              className="w-full accent-blue-600 cursor-pointer"
              value={length}
              min={8}
              max={20}
              onChange={(event)=>{setLength(event.target.value)}}
            /> length: {length}

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
                onChange={()=>{ setisNumAllowed(prev => !prev )}}
              />
              <span className="text-sm text-gray-700">Number Allowed</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
                onChange={()=>{ setisCharAllowed(prev => !prev )}}
              />
              <span className="text-sm text-gray-700">Character Allowed</span>
            </label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
