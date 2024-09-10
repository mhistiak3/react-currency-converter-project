import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
  placeholder,
}) => {

    const cureencyInputId = useId()
  return (
    <div>
      <label className="font-semibold text-md" htmlFor={cureencyInputId}>
        {label}
      </label>
      <div className={`flex items-center mt-2 mb-6 ${className}`}>
        <select
          className="p-2 rounded-l-lg border border-gray-300 bg-white/90 shadow-inner focus:outline-none text-gray-800"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
        <input
          id={cureencyInputId}
          type="number"
          className="p-2 rounded-r-lg border-t border-b border-r border-gray-300 shadow-inner focus:outline-none bg-white/90 text-gray-800 placeholder-gray-500 flex-1"
          placeholder={placeholder}
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
    </div>
  );
};

export default InputBox;
