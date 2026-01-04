import { createSignal } from "solid-js";
import { Line } from "solid-chartjs";

const Chart = () => {
  const [lineData] = createSignal({
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales 2024",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div>
      <div style={{ "margin-bottom": "40px" }}>
        <div
          style={{
            height: "300px",
            background: "white",
            padding: "20px",
            "border-radius": "8px",
            "box-shadow": "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Line data={lineData()} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
