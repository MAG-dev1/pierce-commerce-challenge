import React, { useEffect, useRef } from 'react';
import '../css/popup.css'
import ReactDOM from 'react-dom';

const Popup = ({ isOpen, onClose, children }) => {
  const popupRef = useRef();

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-content" ref={popupRef}>
        <button className="popup-close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body //hacer que popup pase a ser hijo de body
  );
};

export default Popup;