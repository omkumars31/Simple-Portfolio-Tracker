// src/components/StockForm.jsx
import React, { useState, useEffect } from "react";
import { addStock, updateStock } from "../services/stockService";

const StockForm = ({ stockToEdit, onSuccess }) => {
  const [stockData, setStockData] = useState({
    name: "",
    ticker: "",
    quantity: 1,
    buyPrice: 0,
  });

  useEffect(() => {
    if (stockToEdit) {
      setStockData(stockToEdit);
    }
  }, [stockToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStockData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (stockToEdit) {
      await updateStock(stockData.id, stockData);
    } else {
      await addStock(stockData);
    }
    onSuccess();
    setStockData({ name: "", ticker: "", quantity: 1, buyPrice: 0 });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{stockToEdit ? "Edit Stock" : "Add New Stock"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={stockData.name}
          onChange={handleChange}
          placeholder="Stock Name"
          className="mb-2 p-2 w-full"
          required
        />
        <input
          type="text"
          name="ticker"
          value={stockData.ticker}
          onChange={handleChange}
          placeholder="Stock Ticker"
          className="mb-2 p-2 w-full"
          required
        />
        <input
          type="number"
          name="quantity"
          value={stockData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="mb-2 p-2 w-full"
          required
        />
        <input
          type="number"
          name="buyPrice"
          value={stockData.buyPrice}
          onChange={handleChange}
          placeholder="Buy Price"
          className="mb-4 p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          {stockToEdit ? "Update Stock" : "Add Stock"}
        </button>
      </form>
    </div>
  );
};

export default StockForm;
