import { useState, useEffect } from 'react';

const Typewriter = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullText = 'Bienvenido a Codekids';
  const pauseAtText = 'B'; // Define hasta dónde quieres que borre

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // **Escribiendo:** Añade letras hasta completar el texto
        const current = fullText.substring(0, text.length + 1);
        setText(current);

        // Cuando termine de escribir, espera y empieza a borrar
        if (current === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // **Borrando:** Elimina letras hasta llegar a "B"
        const current = text.substring(0, text.length - 1);
        setText(current);

        // Cuando llegue a "B", deja de borrar y reinicia
        if (current === pauseAtText) {
          setIsDeleting(false);
        }
      }

      // Ajusta la velocidad
      setTypingSpeed(isDeleting ? 150 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, fullText, pauseAtText]);

  return <h1 className="title">{text}</h1>;
};

export default Typewriter;