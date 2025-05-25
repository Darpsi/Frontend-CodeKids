import React, { useEffect, useRef, useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import html2canvas from "html2canvas";
import "../assets/styles/AccesibilidadZoom.css";

const AccesibilidadZoom = () => {
  const [zoomEnabled, setZoomEnabled] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(2);
  const magnifierRef = useRef(null);
  const glassRef = useRef(null);
  const screenshotRef = useRef(null);
  const intervalRef = useRef(null);

  const captureScreenshot = async () => {
    if (!magnifierRef.current) return;

    // Mover la lupa fuera del viewport para evitar que salga en la captura
    const originalLeft = magnifierRef.current.style.left;
    const originalTop = magnifierRef.current.style.top;
    magnifierRef.current.style.left = "-9999px";
    magnifierRef.current.style.top = "-9999px";

    const canvas = await html2canvas(document.body, {
      scale: zoomLevel,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight,
    });

    screenshotRef.current = {
      url: canvas.toDataURL("image/png"),
      width: canvas.width,
      height: canvas.height,
    };

    if (glassRef.current) {
      glassRef.current.style.backgroundImage = `url(${screenshotRef.current.url})`;
      glassRef.current.style.backgroundSize = `${screenshotRef.current.width}px ${screenshotRef.current.height}px`;
    }

    // Restaurar posición de la lupa
    magnifierRef.current.style.left = originalLeft;
    magnifierRef.current.style.top = originalTop;
  };

  const updateMagnifier = (e) => {
    if (!zoomEnabled || !magnifierRef.current || !glassRef.current || !screenshotRef.current) return;

    const { pageX, pageY, clientX, clientY } = e;
    const magnifierSize = 200;
    const half = magnifierSize / 2;

    // Centrar la lupa en el cursor
    magnifierRef.current.style.left = `${clientX}px`;
    magnifierRef.current.style.top = `${clientY}px`;

    // Calcular el backgroundPosition para centrar el área de zoom
    const bgX = -((pageX * zoomLevel) - half);
    const bgY = -((pageY * zoomLevel) - half);

    glassRef.current.style.backgroundPosition = `${bgX}px ${bgY}px`;
  };

  useEffect(() => {
    if (zoomEnabled) {
      captureScreenshot();
      document.addEventListener("mousemove", updateMagnifier);

      // Actualizar con scroll
      window.addEventListener("scroll", captureScreenshot);

      // Actualizar cada 500 ms (puedes cambiar este valor)
      intervalRef.current = setInterval(() => {
        captureScreenshot();
      }, 4000);
    } else {
      document.removeEventListener("mousemove", updateMagnifier);
      window.removeEventListener("scroll", captureScreenshot);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      document.removeEventListener("mousemove", updateMagnifier);
      window.removeEventListener("scroll", captureScreenshot);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [zoomEnabled, zoomLevel]);

  const toggleZoom = () => {
    setZoomEnabled((prev) => !prev);
  };

  const handleZoomChange = (e) => {
    setZoomLevel(parseFloat(e.target.value));
  };

  return (
    <>
      <div className="zoom-controls">
        <button
          className="btn-zoom"
          onClick={toggleZoom}
          aria-label={zoomEnabled ? "Desactivar lupa" : "Activar lupa"}
        >
          {zoomEnabled ? <ZoomOut size={40} /> : <ZoomIn size={40} />}
        </button>

        {zoomEnabled && (
          <div className="zoom-slider">
            <label htmlFor="zoom-range">Zoom: {zoomLevel.toFixed(1)}x</label>
            <input
              id="zoom-range"
              type="range"
              min="1"
              max="4"
              step="0.1"
              value={zoomLevel}
              onChange={handleZoomChange}
            />
          </div>
        )}
      </div>

      <div
        ref={magnifierRef}
        className={`magnifier-container ${zoomEnabled ? "visible" : ""}`}
      >
        <div ref={glassRef} className="magnifier-glass" />
      </div>
    </>
  );
};

export default AccesibilidadZoom;
