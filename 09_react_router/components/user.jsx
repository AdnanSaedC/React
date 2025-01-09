import React from 'react'
import {useParams} from 'react-router-dom'

export default function User(){

    let {userid}=useParams();
    //what we are doing here is we are 
    //getting the parameters thats why object
    let name=userid
    name=name.toUpperCase();
    return(
        <h1 className='bg-gray-500 text-3xl p-4 rounded-xl m-5 text-center'>welcome {name} </h1>
    )
}