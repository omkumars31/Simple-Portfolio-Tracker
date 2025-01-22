// src/services/stockService.js
import axios from "axios";

const API_URL = "http://localhost:8080";  // Replace with your backend URL

export const getStocks = async () => {
  const response = await axios.get(`${API_URL}/stocks`);
  return response.data;
};

export const addStock = async (stock) => {
  await axios.post(`${API_URL}/stocks`, stock);
};

export const updateStock = async (id, stock) => {
  await axios.put(`${API_URL}/stocks/${id}`, stock);
};

export const deleteStock = async (id) => {
  await axios.delete(`${API_URL}/stocks/${id}`);
};
