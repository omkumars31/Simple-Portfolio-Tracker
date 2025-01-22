// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { getStocks } from "../services/stockService";

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // Fetch stocks on load
    const fetchStocks = async () => {
      const stockData = await getStocks();
      setStocks(stockData);
      calculateTotalValue(stockData);
    };

    fetchStocks();
  }, []);

  // Calculate total portfolio value
  const calculateTotalValue = (stocks) => {
    let value = 0;
    stocks.forEach((stock) => {
      value += stock.quantity * stock.currentPrice;
    });
    setTotalValue(value);
  };

  const topStock = stocks.sort((a, b) => (b.quantity * b.currentPrice) - (a.quantity * a.currentPrice))[0];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold">Portfolio Dashboard</h1>
      <div className="mt-4">
        <p className="text-lg">Total Portfolio Value: ${totalValue.toFixed(2)}</p>
        {topStock && (
          <div className="mt-4">
            <p className="font-semibold">Top Performing Stock:</p>
            <p>{topStock.name} ({topStock.ticker})</p>
            <p>Current Price: ${topStock.currentPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
