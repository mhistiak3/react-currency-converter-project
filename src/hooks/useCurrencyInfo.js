import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-09-10/v1/currencies/${currency}.json`
        );
        const result = await response.json();
        setData(result[currency]);
      } catch (error) {
        console.log(error);
      }
    };
console.log(currency);

    fetchCurrencyData();
  }, [currency]);

  return data;
}
