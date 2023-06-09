import React, { useState } from 'react';
import axios from 'axios';

function AddBooking() {
  const [booking, setBooking] = useState({
    CustomerID: '',
    HotelID: '',
    CheckInDate: '',
    CheckOutDate: '',
    RoomType: '',
    TotalPrice: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/bookings', booking);
      alert('Booking added successfully!');
      setBooking({
        CustomerID: '',
        HotelID: '',
        CheckInDate: '',
        CheckOutDate: '',
        RoomType: '',
        TotalPrice: '',
      });
    } catch (error) {
      console.error('Error adding booking:', error);
    }
  };

  return (
    <div>
      <h1>Add Booking</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Customer ID:
          <input
            type="text"
            name="CustomerID"
            value={booking.CustomerID}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Hotel ID:
          <input
            type="text"
            name="HotelID"
            value={booking.HotelID}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Check-in Date:
          <input
            type="date"
            name="CheckInDate"
            value={booking.CheckInDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Check-out Date:
          <input
            type="date"
            name="CheckOutDate"
            value={booking.CheckOutDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Room Type:
          <input
            type="text"
            name="RoomType"
            value={booking.RoomType}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Total Price:
          <input
            type="number"
            name="TotalPrice"
            value={booking.TotalPrice}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Booking</button>
      </form>
    </div>
  );
}

export default AddBooking;
