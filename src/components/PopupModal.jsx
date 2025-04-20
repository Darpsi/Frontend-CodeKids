import React from "react";
import "../assets/styles/Perfil.css"; // modal, estilos de la ventana emergente

const PopupModal = ({ visible, onClose, title, children, triggerPosition }) => {
  if (!visible) return null;

  const modalStyle = {
    top: triggerPosition.top,
    left: triggerPosition.left,
    transform: "translate(-50%, -50%)"
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <span className="cerrar" onClick={onClose}>✖</span>
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
