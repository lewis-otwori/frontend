import React from "react";
import "./HotelItems.css";

function HotelItem({ HotelID ,Name, Rating,Capacity, Email, Phone, Address, addDelete}){
    //display data in a card

function handleDelete(HotelID){
    addDelete(HotelID)
}

    return(
        <div className="card">
            <p>{HotelID}</p>
            <h2>{Name}</h2>
            <p>{Email}</p>
            <p>{Phone}</p>
            <p>{Rating}</p>
            <p>{Capacity}</p>
            <p>{Address}</p>
            <button onClick={ () =>handleDelete  (HotelID) }>Delete Button</button>
         </div>
        
    )

}

export default HotelItem