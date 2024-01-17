
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DisplayData.css'; 
import { setIsModalVisible } from '../../Redux/Slices/DataSlice';

const DisplayData = () => {
  const locationData = useSelector(state => state.locationData);
  const isModalVisible = useSelector(state => state.isModalVisible);
  const dispatch = useDispatch();

  

  return (
    <div className="display-data-container">
      <ul>
        {locationData.map((item, index) => (
          <li key={index} className="data-item">
            <span>{item.region}</span>
            <span style={{marginLeft:"2rem"}}>{item.country}</span>
            <span style={{marginLeft:"2rem"}}>{item.currency}:</span>
            <span style={{marginLeft:"2rem"}}>+ {item.callingCode}</span>
            <span style={{marginLeft:"2rem", cursor:"pointer"}} >Edit</span>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default DisplayData;
