import React, { useState } from "react";
import "./AddHotelForm.css";

function AddHotelForm({ onAddHotel }) {
  const [hotelData, setHotelData] = useState({
    HotelID: "",
    Name: "",
    Rating: "",
    Capacity: "",
    Email: "",
    Phone: "",
    Address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHotel(hotelData);
    // Reset the form fields after submission
    setHotelData({
      HotelID: "",
      Name: "",
      Rating: "",
      Capacity: "",
      Email: "",
      Phone: "",
      Address: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="HotelID"
        value={hotelData.HotelID}
        onChange={handleChange}
        placeholder="Hotel ID"
        required
      />
      <input
        type="text"
        name="Name"
        value={hotelData.Name}
        onChange={handleChange}
        placeholder="Hotel Name"
        required
      />
      <input
        type="text"
        name="Rating"
        value={hotelData.Rating}
        onChange={handleChange}
        placeholder="Hotel Rating"
        required
      />
      <input
        type="text"
        name="Capacity"
        value={hotelData.Capacity}
        onChange={handleChange}
        placeholder="Hotel Capacity"
        required
      />
      <input
        type="email"
        name="Email"
        value={hotelData.Email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        name="Phone"
        value={hotelData.Phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        type="text"
        name="Address"
        value={hotelData.Address}
        onChange={handleChange}
        placeholder="Address"
        required
      />
      <button type="submit">Add Hotel</button>
    </form>
  );
}

export default AddHotelForm;
