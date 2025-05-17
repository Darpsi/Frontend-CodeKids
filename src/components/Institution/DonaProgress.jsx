import { PieChart, Pie, Cell } from "recharts";
import "../../assets/styles/admin/donaProgress.css";


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
    <div className="dona-container">
      <PieChart width={250} height={250}>
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
      </PieChart>

      <div className="dona-legend">
        <h4 className="dona-title">Progreso del estudiante</h4>
        {data.map((entry, index) => (
          <div className="dona-item" key={entry.name}>
            <div
              className="dona-color"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span>{`${entry.name}: ${entry.value}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonaProgreso;
