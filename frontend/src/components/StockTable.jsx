// src/components/StockTable.jsx
import React from "react";
import { deleteStock } from "../services/stockService";

const StockTable = ({ stocks, onEdit, onDelete }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">My Stocks</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Stock Name</th>
            <th className="px-4 py-2">Ticker</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Buy Price</th>
            <th className="px-4 py-2">Current Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td className="px-4 py-2">{stock.name}</td>
              <td className="px-4 py-2">{stock.ticker}</td>
              <td className="px-4 py-2">{stock.quantity}</td>
              <td className="px-4 py-2">${stock.buyPrice}</td>
              <td className="px-4 py-2">${stock.currentPrice}</td>
              <td className="px-4 py-2">
                <button onClick={() => onEdit(stock)} className="mr-2 text-blue-500">Edit</button>
                <button onClick={() => onDelete(stock.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
