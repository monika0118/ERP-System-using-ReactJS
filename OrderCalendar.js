import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default calendar CSS
import './OrderCalendar.css'; // Import CSS file for styling

const OrderCalendar = () => {
  // Dummy data for orders
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', deliveryDate: new Date(2024, 2, 15) }, // March 15, 2024
    { id: 2, customer: 'Jane Smith', deliveryDate: new Date(2024, 2, 16) }, // March 16, 2024
    { id: 3, customer: 'Alice Johnson', deliveryDate: new Date(2024, 2, 17) }, // March 17, 2024
    { id: 4, customer: 'Bob Brown', deliveryDate: new Date(2024, 2, 18) }, // March 18, 2024
  ]);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Function to handle date click
  const handleDateClick = (date) => {
    // Filter orders for the selected date
    const filteredOrders = orders.filter(order => order.deliveryDate.toDateString() === date.toDateString());
    setSelectedOrders(filteredOrders);
    setSelectedDate(date);
  };

  return (
    <div className="orders-calendar-container">
      <h2 className="orders-calendar-header">Orders Calendar</h2>
      <div className="calendar-and-orders">
        <Calendar onClickDay={handleDateClick} />
        {selectedDate && (
          <div className="selected-date-orders">
            <h3>Orders for {formatDate(selectedDate)}</h3>
            {selectedOrders.length > 0 ? (
              <ul>
                {selectedOrders.map(order => (
                  <li key={order.id}>{order.customer}</li>
                ))}
              </ul>
            ) : (
              <p>No orders for this date</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCalendar;
