import { useState,useEffect } from "react";


//we are creating our own hook now
//hook are nothing but function which return an array
function useCurrencyInfo(currency){

    let [data,setData]=useState({});
    //here we are giving am empty object initially

    //now we are going to call useEffect because we want
    //our function to run each and every time when there is a change
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        //now you will get the a string in return format lets 
        //convert that into JSON meri jaaan
        .then((rawData)=>rawData.json())
        .then((data)=>{setData(data[currency])});
        // console.log("data"); 
        // console.log(data); 
    },[currency])
    
    return data;
}

export default useCurrencyInfo;
//tadaaa your hook is ready 
//the first stuff is data and the next thing is function itself
//thats why in order to update something you have to call a method and give the value
//just made my day