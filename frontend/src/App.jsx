// src/App.jsx
import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import StockForm from "./components/StockForm";
import StockTable from "./components/StockTable";
import { getStocks, deleteStock } from "./services/stockService";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [editingStock, setEditingStock] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      const stockData = await getStocks();
      setStocks(stockData);
    };

    fetchStocks();
  }, []);

  const handleEdit = (stock) => {
    setEditingStock(stock);
  };

  const handleDelete = async (id) => {
    await deleteStock(id);
    const updatedStocks = stocks.filter((stock) => stock.id !== id);
    setStocks(updatedStocks);
  };

  const handleAddStockSuccess = () => {
    setEditingStock(null);
    // Refetch stocks after add/edit operation
    const fetchStocks = async () => {
      const stockData = await getStocks();
      setStocks(stockData);
    };
    fetchStocks();
  };

  return (
    <div className="container mx-auto p-4">
      <Dashboard />
      <StockForm stockToEdit={editingStock} onSuccess={handleAddStockSuccess} />
      <StockTable stocks={stocks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
