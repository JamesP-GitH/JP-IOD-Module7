import React from "react";
import { useState, useEffect } from "react";
import useData from "../hooks/useData";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);

    const { data, loading, error } = useData(`/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
    const [bitcoinPrice, setBitcoinPrice] = useState("Loading...");

    useEffect(() => {
        if (loading) {
            setBitcoinPrice("Loading...");
        } else if (error) {
            setBitcoinPrice("Error loading data");
        } else if (data && data.bitcoin && data.bitcoin[currency.toLowerCase()] !== undefined) {
            setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
        } else {
            setBitcoinPrice("Unavailable");
        }
    }, [data, loading, error, currency]);

    const options = currencies.map((curr) => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>
                Choose currency: {""}
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <div>Exchange Rate: {bitcoinPrice} </div>
        </div>
    );
}

export default BitcoinRates;
