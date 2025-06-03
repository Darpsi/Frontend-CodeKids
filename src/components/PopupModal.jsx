import React from "react";
import "../assets/styles/Perfil.css";

const PopupModal = ({ visible, onClose, title, children, size = {} }) => {
  if (!visible) return null;

  const modalStyle = {
    width: size.width || "400px",
    minHeight: size.minHeight || "400px",
    maxHeight: size.maxHeight || "95vh",
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="cerrar" onClick={onClose}>✖</span>
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;