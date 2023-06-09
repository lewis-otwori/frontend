// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Bookings() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/")
//     .then(res => res.json())
//     .then(bookings => (setBookings(bookings)))
//   }, [bookings])

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get('/bookings');
//       setBookings(response.data);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Hotel Bookings</h1>
//       <ul>
//         {bookings.map((booking) => (
//           <li key={booking.BookingID}>
//             <div>Booking ID: {booking.BookingID}</div>
//             <div>Customer ID: {booking.CustomerID}</div>
//             <div>Hotel ID: {booking.HotelID}</div>
//             <div>Check-in Date: {booking.CheckInDate}</div>
//             <div>Check-out Date: {booking.CheckOutDate}</div>
//             <div>Room Type: {booking.RoomType}</div>
//             <div>Total Price: {booking.TotalPrice}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Bookings;
