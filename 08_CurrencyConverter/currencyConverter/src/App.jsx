import React, { useState } from "react";
import useCurrencyInfo from "../hooks/CurrencyInfo";
import InputBox from "../components/inputbox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const optionsAvailable = Object.keys(currencyInfo);

  const conversion = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);

    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          conversion();
        }}
        className="w-full max-w-md bg-white rounded-2xl p-6 space-y-5 shadow-xl"
      >
        <h1 className="text-xl font-semibold text-gray-800 text-center">
          Currency Converter
        </h1>

        {/* FROM */}
        <InputBox
          label="From"
          Amount={amount}
          currencyOption={optionsAvailable}
          onCurrencyChange={(currency) => setFrom(currency)}
          currency={from}
          onAmountChange={(amount) => setAmount(amount)}
        />

        {/* SWAP BUTTON */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={swap}
            className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-medium
                       hover:bg-blue-700 active:scale-95 transition"
          >
            Swap
          </button>
        </div>

        {/* TO */}
        <InputBox
          label="To"
          Amount={convertedAmount}
          currencyOption={optionsAvailable}
          onCurrencyChange={(currency) => setTo(currency)}
          currency={to}
          amountDisable={true}
        />

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold
                     hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
