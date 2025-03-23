import Encabezado from "./components/Encabezado";
import "bootstrap/dist/css/bootstrap.min.css";
import InformacionComponente from "./components/InformacionComponente";

function App() {
  return (
    <main className="container my-5">
      <Encabezado />
      <InformacionComponente />
    </main>
  );
}

export default App;
