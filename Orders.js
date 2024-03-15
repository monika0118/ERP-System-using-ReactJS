import React, { useState } from 'react';
import './Orders.css';

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', date: '2024-01-11', status: 'Delivered' },
    { id: 2, customer: 'Jane Smith', date: '2024-02-15', status: 'Delivered' },
    { id: 3, customer: 'Alice Johnson', date: '2024-03-18', status: 'Processing' },
    { id: 4, customer: 'Bob Brown', date: '2024-03-16', status: 'Delivered' },
    { id: 5, customer: 'Brown', date: '2024-02-11', status: 'Delivered' },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewOrderDetails = (orderId) => {
    const selected = orders.find(order => order.id === orderId);
    setSelectedOrder(selected);
  };

  const handleUpdateStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const filteredOrders = orders.filter(order => order.id !== orderId);
    setOrders(filteredOrders);
  };

  return (
    <div className="orders-container">
      <h2 className="orders-header">Orders Page</h2>
      <div className="orders-grid">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <h3>Order {order.id}</h3>
            <p>Customer: {order.customer}</p>
            <p>Date: {order.date}</p>
            <p>Status: {order.status}</p>
            <button onClick={() => handleViewOrderDetails(order.id)}>View Details</button>
            <button onClick={() => handleUpdateStatus(order.id, 'Processing')}>Update Status to Processing</button>
            <button onClick={() => handleUpdateStatus(order.id, 'Delivered')}>Update Status to Delivered</button>
            <button onClick={() => handleDeleteOrder(order.id)}>Delete Order</button>
          </div>
        ))}
      </div>
      {selectedOrder && (
        <div className="order-details">
          <h3>Order Details</h3>
          <p>Order ID: {selectedOrder.id}</p>
          <p>Customer: {selectedOrder.customer}</p>
          <p>Date: {selectedOrder.date}</p>
          <p>Status: {selectedOrder.status}</p>
          <button onClick={() => setSelectedOrder(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
