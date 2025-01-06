import React, { useState,useEffect } from "react";
import useCurrencyInfo from '../hooks/CurrencyInfo'
import './index.css'
import InputBox from "../components/inputbox";

function App(){

  let [amount,setAmount]=useState(0);
  let [from,setFrom]=useState("usd");
  let [to,setTo]=useState("inr");
  let [convertedAmount,setConvertedAmount]=useState(0);
  
  let currencyInfo=useCurrencyInfo(from);

  //let extrat the option(values inside the brcakets) usd-(inr,pound)
  let optionsAvailable=Object.keys(currencyInfo)
  //let optionsAvailable=[]


  const conversion=()=>{
    //because currency info return object full of valid currencies
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
return(
  <>
  <div className="bg-black w-full h-screen text-white flex justify-center">
    <div className="place-content-center">
      <form
        onSubmit={(event)=>{
          event.preventDefault();
          conversion();
        }}
      >
        <div>
          <InputBox  
          label="from"
          Amount={amount}
          currencyOption={optionsAvailable}
          onCurrencyChange={(currency)=>setFrom(currency)}
          currency={from}
          onAmountChange={(amount)=>{setAmount(amount)}}
          //whenever currency changes calculate the new value based on the new
          //curremcy
          amountDisable={false}
          currencyDisable={false}
          />
          {/* this is from components crazy right */}
        </div>
        <div>
          <button onClick={swap}>
            Swap
          </button>
        </div>
        <div>
          <InputBox  
          label="To"
          Amount={convertedAmount}
          currencyOption={optionsAvailable}
          //whenever currency changes calculate the new value based on the new
          //curremcy
          onCurrencyChange={(currency)=>setTo(currency)}
          currency={to}
          //onAmountChange={(convertedAmount)=>{setConvertedAmount(convertedAmount)}}
          amountDisable={false}
          currencyDisable={false}
          />
          {/* this is from components crazy right */}
        </div>
        <button type="submit">
          Covert {from.toUpperCase()} to {to.toLowerCase()}
        </button>
      </form>
    </div>
  </div>
  </>
)
}

export default App;

