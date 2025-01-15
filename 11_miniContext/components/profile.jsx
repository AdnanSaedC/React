import { useContext } from "react"
import React from 'react'
import UserContext from "../src/Context/userContext"

function Profile() {
    
    let {user}=useContext(UserContext)
    
    if(!user) return <h1>Please login</h1>

    return (
        <h1>Welcome {user.username}</h1>
    )
}

export default Profile