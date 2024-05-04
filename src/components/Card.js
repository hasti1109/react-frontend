import React from 'react'
import '../styles/Card.css'


const Card = ({ data, handleOpenModal }) => {
  const timestamp = data.date;
  const date = new Date(timestamp * 1000);
  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return (
    <>
    <div className="card">
      <div className="image-container">
        <div className="image-overlay">
          <button onClick={() => handleOpenModal()} className='image-button'>Learn More</button>
        </div>
        <img src={data.thumbnail.small} alt="Card" className="card-image" />
      </div>
      <div class="circle-container">
        <div class="blue-circle"></div>
        <div class="orange-circle"></div>
      </div>
      <div className="card-content">
        <h2 className="card-title" onClick={() => handleOpenModal()}>{data.title}</h2>
        <p className="card-description">{data.content}</p>
        <div className="card-footer">
          <span className="author">{data.author.name} - {data.author.role}</span>
          <span className="date">{formattedDate}</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;

