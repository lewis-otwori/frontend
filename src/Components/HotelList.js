import React from 'react'
import HotelItem from './HotelItems'

function HotelList({data}) {
  console.log('data',data)
  return (
    <div>{data.map(datum => (
    <HotelItem {...datum} key={datum.HotelID}/>
    ))}
    </div>
  )
}

export default HotelList