import { useState } from "react";
import { Button } from "react-bootstrap";

const Contador = ({ infoComision }) => {
  const [numero, setNumero] = useState(1);

  return (
    <section className="text-center">
      <h2>Contador: {infoComision}</h2>
      <p className="lead">{numero}</p>
      <Button className="me-2" onClick={() => setNumero(numero + 1)}>
        +
      </Button>
      <Button variant="danger" onClick={() => setNumero(numero - 1)}>
        -
      </Button>
    </section>
  );
};

export default Contador;
