import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const GraficoProgreso = ({ estudiantes, totalModulos = 8}) => {
  const conteoPorModulo = Array(totalModulos).fill(0);

  estudiantes.forEach(({ id_modulo_actual }) => {
    if (id_modulo_actual > 0 && id_modulo_actual <= totalModulos) {
      conteoPorModulo[id_modulo_actual - 1]++;
    }
  });

  const data = conteoPorModulo.map((count, index) => ({
    modulo: `Módulo ${index + 1}`,
    estudiantes: count,
  }));

  return (
    <div style={{ width: "100%", height: 350, padding: "20px 0" }}>
      <h3 style={{marginLeft: "4rem"}}>Progreso General de Estudiantes</h3>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="modulo" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="estudiantes" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoProgreso;
