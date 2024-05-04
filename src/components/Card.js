import { useState } from 'react';
import React from 'react'
import '../styles/Card.css'
import Modal from './Modal';

const Card = ({ data }) => {
  const timestamp = data.date;
  const date = new Date(timestamp * 1000);
  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  const [showModal, setShowModal] = useState(false)
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => {
    setShowModal(true);
    setModalIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
    <div className="card">
      <div className="image-container">
        <div className="image-overlay">
          <button onClick={() => openModal(50)} className='image-button'>Learn More</button>
        </div>
        <img src={data.thumbnail.small} alt="Card" className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{data.title}</h2>
        <p className="card-description">{data.content}</p>
        <div className="card-footer">
          <span className="author">{data.author.name} - {data.author.role}</span>
          <span className="date">{formattedDate}</span>
        </div>
      </div>
    </div>
    {showModal && <Modal data={data} onClose={closeModal} modalIndex={modalIndex}/>}
    </>
  );
};

export default Card;

