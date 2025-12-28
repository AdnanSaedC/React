import React, { useId } from "react";

function InputBox({
    label,
    Amount = 10,
    onAmountChange,
    currency = "usd",
    currencyOption = [],
    onCurrencyChange,
    amountDisable = false,
    currencyDisable = false,
}) {
    const AmountInputId = useId();

    return (
        <div className="w-full bg-white border border-gray-200 rounded-xl p-4 flex gap-4 shadow-sm">
            
            {/* Amount Section */}
            <div className="w-1/2 flex flex-col gap-1">
                <label
                    htmlFor={AmountInputId}
                    className="text-sm font-medium text-gray-700"
                >
                    {label}
                </label>

                <input
                    id={AmountInputId}
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={Amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                    className={`w-full rounded-lg border px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                        disabled:bg-gray-100 disabled:cursor-not-allowed`}
                />
            </div>

            {/* Currency Section */}
            <div className="w-1/2 flex flex-col items-end gap-1">
                <p className="text-sm font-medium text-gray-500">
                    Currency Type
                </p>

                <select
                    value={currency}
                    disabled={currencyDisable}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    className={`w-full max-w-[120px] rounded-lg border px-3 py-2 text-sm bg-gray-50
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                        disabled:bg-gray-100 disabled:cursor-not-allowed`}
                >
                    {currencyOption.map((value) => (
                        <option key={value} value={value}>
                            {value.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
