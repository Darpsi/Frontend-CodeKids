import { PieChart, Pie, Cell, Legend } from "recharts";

const DonaProgreso = ({ moduloActual }) => {
  const totalModulos = 8;
  const completados = moduloActual - 1;
  const enCurso = 1;
  const faltantes = totalModulos - moduloActual;

  const data = [
    { name: "Completados", value: completados },
    { name: "En curso", value: enCurso },
    { name: "Faltantes", value: faltantes },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      <h3>Progreso del estudiante</h3>
      <PieChart width={300} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default DonaProgreso;
