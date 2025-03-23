import Encabezado from "./components/Encabezado";
import "bootstrap/dist/css/bootstrap.min.css";
import InformacionComponente from "./components/InformacionComponente";
import Contador from "./components/Contador";

function App() {

    const comision = "React2"  
  return (
    <main className="container my-5">
      <Encabezado />
      <InformacionComponente />
      <Contador infoComision={comision}/>
    </main>
  );
}

export default App;
