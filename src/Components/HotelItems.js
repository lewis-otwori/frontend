import React from "react";
import "./HotelItems.css";

function HotelItem({ HotelID, Name, Rating, Capacity, Email, Phone, Address, addDelete }) {
  function handleDelete(HotelID) {
    addDelete();
  }

  return (
    <div className="card">
      <p>{HotelID}</p>
      <h2>{Name}</h2>
      <p>{Email}</p>
      <p>{Phone}</p>
      <p>{Rating}</p>
      <p>{Capacity}</p>
      <p>{Address}</p>
      <button onClick={handleDelete} className="delete-button">Delete Hotel</button>
      <button className="book-button">Book Hotel</button>
    </div>
  );
}

export default HotelItem;
