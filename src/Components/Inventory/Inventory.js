import React, { useState } from 'react';
import './Inventory.css'
import Location from "../Location/Location";

export default function Inventory() {
const [locationOpen, setLocationOpen] = useState(false)

  const locationhandler = ()=>{
    setLocationOpen(!locationOpen)
  }
  return (
    <>
      <h1 className='inventory'>Inventory</h1>

      <div className='inventory-details'>
        <span onClick={locationhandler} style={{cursor:"pointer"}}>Location</span>
        <span>Company</span>
        <span>State</span>
      </div>
      <div className='hr'></div>
     
      {locationOpen && <Location/>}
    </>
  );
}
