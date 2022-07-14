import "./App.css";
import Car from "./components/Car";

function App() {
  const cars = [
    { name: "Supra", km: 21000, color: "Preto" },
    { name: "RX-7", km: 32000, color: "Amarelo" },
    { name: "Evo X", km: 28000, color: "Chumbo" },
  ];

  return (
    <div className="App">
      <h1>Carros</h1>
      <div className="car-container">
        {cars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
