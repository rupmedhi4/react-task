import React, { useState } from 'react';
import './Location.css';
import DisplayData from '../Form/DisplayData';
import Modal from '../Form/Modal/Modal';
import { useDispatch } from 'react-redux';

export default function Location() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const showModalHandler = () => {
    setIsModalVisible(!isModalVisible);
  };

  

  return (
    <>
      <button className='locationAdd-btn' onClick={showModalHandler}><div>+</div></button>
      <div className='location-details'>
        <span>REGION</span>
        <span>COUNTRY</span>
        <span>CURRENCY</span>
        <span>CALLING CODE</span>
      </div>
      <div className='location-hr'></div>
      <DisplayData />
      {isModalVisible && <Modal/>}
    </>
  );
}
