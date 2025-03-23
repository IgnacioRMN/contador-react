import Encabezado from "./components/Encabezado";
import "bootstrap/dist/css/bootstrap.min.css";
import InformacionComponente from "./components/InformacionComponente";
import Contador from "./components/Contador";

function App() {
  return (
    <main className="container my-5">
      <Encabezado />
      <InformacionComponente />
      <Contador/>
    </main>
  );
}

export default App;
