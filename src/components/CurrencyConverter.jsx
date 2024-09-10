// src/components/CurrencyConverter.jsx
import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa"; // Importing the swap icon
import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [convertdAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertdAmount);
  };
  
  
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200">
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Currency Converter
        </h1>

        {/* Input Group 1: Base Currency */}
        <InputBox
          placeholder="Enter amount"
          label={"From: "}
          currencyOptions={options}
          amount={amount}
          onAmountChange={(amount) => setAmount(amount)}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
        />

        {/* Swap Button */}
        <div className="flex justify-center mb-4">
          <button
            className="p-2 bg-white/70 rounded-full shadow-md hover:bg-white transition-all duration-200"
            onClick={swap}
          >
            <FaExchangeAlt className="text-gray-800" />
          </button>
        </div>

        {/* Input Group 2: Target Currency */}
        <InputBox
          placeholder="Converted amount"
          label={"To: "}
          currencyOptions={options}
          amount={convertdAmount}
          onAmountChange={(amount) => setConvertedAmount(amount)}
          selectCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
          amountDisabled
        />

        {/* Convert Button */}
        <button
          className="w-full bg-white/70 text-gray-800 py-2 px-4 rounded-lg hover:bg-white transition-all duration-200 shadow-md font-bold"
          onClick={() => convert()}
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default CurrencyConverter;
