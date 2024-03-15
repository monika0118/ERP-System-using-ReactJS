// src/App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Products from './Products';
import Orders from './Orders';
import OrderCalendar from './OrderCalendar';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/ordercalendar" element={<OrderCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
