//this is my code and i got to know there is not problem here
import React,{useId} from "react";

//useId hook is used to generate a random id

function InputBox({
    label,
    Amount=10,
    onAmountChange,
    currency="usd",
    currencyOption=[],
    onCurrencyChange,
    amountDisable=false,
    currencyDisable=false,
})
{   
    const AmountInputId=useId()
    
    return(
        <>
            <div className=" p-3 rounded-lg text-sm flex">
                <div className="w-1/2">
                    <label className="text-black mb-2 inline-block"
                    htmlFor={AmountInputId}
                    >
                        {label}
                    </label>
                <input
                id={AmountInputId}
                    className=" w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={Amount}
                    //first we are checking whether the function has been given by the
                    //user not if yes then return this
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
                <input/>
                </div>
                <div className="w-1/2m flex flex-wrap justify-end text-right">
                    <p className="text-black/40 mb-2 w-full">
                        currency Type
                    </p>
                    <select
                    value={currency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    className="rounded-lg p-1 bg-gray-100 text-gray-800 outline-none"
                    
                    >
                        
                        {currencyOption.map(
                            (IndexValue)=>(
                                //they are not repatedly creating stuff
                                <option
                                className="text-black"
                                key={IndexValue} value={IndexValue}>{IndexValue}</option>
                            )
                        )}
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox;
