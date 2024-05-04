import React, { useRef } from 'react'
import '../styles/Modal.css'
import { X } from 'lucide-react'

const Modal = ({data, onClose}) => {

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current ===  e.target){
      onClose();
    }
  }

  return (
    <div ref={modalRef} onClick={closeModal} className='modal-container'>
      <div className="modal-overlay">
        <div className="modal-card">
          <div className='quit-button'><X onClick={onClose} className='cross'/></div>
          <img src={data.thumbnail.small} alt="Card" className="modal-image" />
          <div className="modal-card-content">
            <h2 className="modal-card-title">{data.title}</h2>
            <p className="modal-card-description">{data.content}</p>
            <div className="modal-card-footer">
              <span className='modal-avatar'><img src={data.author.avatar}/></span>
              <span className="modal-author">{data.author.name} | {data.author.role}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
