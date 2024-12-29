
import Adnan from './adnan'


function App() {
  let adnan="Adnan0042n"
  return (
    //lets pass variable too
    //everything inside {} is variable like `${}` in js

    //{} this is known as evaluated syntax because you can write only
    //variables not js
    //because at the end of the day they are object and object doesnt
    //contains if else they just contains properties thats it
    <>
    //you can return only one tag
    <Adnan />
    <h1>How is your day going brother {adnan}</h1>
    </>
  )
}

export default App
