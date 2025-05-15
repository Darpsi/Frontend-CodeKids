const GetBarColor = (porcentaje) => {
  if (porcentaje < 30) return "#e74c3c";      // rojo
  if (porcentaje < 70) return "#f1c40f";      // amarillo
  return "#2ecc71";                           // verde
};

export default GetBarColor;