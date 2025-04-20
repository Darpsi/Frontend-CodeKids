
import React, { useState } from 'react';
import "../assets/styles/Forgot-password.css"

const PasswordStepForm = ({ title, fields, label, onSubmit }) => {
  const [formData, setFormData] = useState(() => {
    // Iniciar cada campo con valor vacío
    const initial = {};
    fields.forEach((field) => {
      initial[field.name] = '';
    });
    return initial;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Envía todos los campos
  };

  return (
    <div className='section-total'>
      <div className='forgot-form-container'>
        <h2 className='forgot-form-title'>{title}</h2>
        <form onSubmit={handleSubmit} className="forgot-form">
          {fields.map((field) => (
            <input
            key = {field.name}
            type = {field.type ||"text"}
            name = {field.name}
            className="input-forgot-form"
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            required
          />

          ))}
          
          <button
            type="submit"
            className="button-forgot-form"
          >
            {label}
          </button>
          {/* <div className='links-form'>
            <a href="/login">Regresar</a>
          </div> */}
        </form>
      </div>
    </div>
    
  );
};

export default PasswordStepForm;
