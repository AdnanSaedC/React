import React,{useState,useContext} from 'react'
import userContext from '../src/Context/userContext'



function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    //lets look how to send value from userContext
    let {setUser}=useContext(userContext)
    //dude this is flow merijaaaan




    

    //behind the scene what is happening is
    //let {key}={"key": "value"}

    //here
    //let {key}={"key": ({...values})=>{}}
    //check the parameter part im not sure
    




    //we are creating a function inside a function
    let handleSubmit=(e) => {
        e.preventDefault();
        setUser({username,password})
    }

    return (
        <div>
            <h1>Adnan</h1>
            <input type='text' value={username}

            // to receive that value
            onChange={(e)=>setUsername(e.target.value)}

            placeholder='username' />
            <input type='text'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login

//use rfce to get the template 