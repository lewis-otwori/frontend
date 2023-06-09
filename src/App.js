import React, { useState, useEffect } from 'react';
import HotelList from './Components/HotelList';
// import Bookings from './Bookings';
import HotelItem from './Components/HotelItems';

function App() {
  const [data, setData] = useState([]);
  console.log('before fetch', data);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/hotels")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []); // Removed "data" from the dependency array

  function hotelDelete(HotelID){
    fetch(`http://127.0.0.1:8000/hotels/${HotelID}`,{
      method: 'DELETE'
    } )
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }

  return (
    <div>
      <HotelList data={data} />
      {/* <Bookings/> */}
      <HotelItem addDelete={hotelDelete}/>
    </div>
  );
}

export default App;
