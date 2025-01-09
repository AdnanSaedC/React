import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github(){
    
    let data=useLoaderData()

    // let [data,setData]=useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AdnanSaedC')
    //     .then(response=>response.json())
    //     .then(response =>{
    //         setData(response);
    //         console.log(response);
    //     })
    // },[])

    return(
        <>
        <div className="p-5 text-center">
        <h1>Name: {data.login}</h1>
        <p>Follower: {data.followers}</p>
        <img src={data.avatar_url}/>
        </div>
        </>
    )
}

export const fetchApiWhenHover=async ()=>{
    const responce = await fetch('https://api.github.com/users/AdnanSaedC')
        
        return responce.json();
}