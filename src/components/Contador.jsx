import { Button } from "react-bootstrap";


const Contador = ({infoComision}) => {
    let numero = 1;
    const sumar = () => {
        numero++
    }
    return (
        <section className="text-center">
            <h2 >Contador: {infoComision}</h2>
            <p className="lead">{numero}</p>
            <Button className="me-2" onClick={sumar}>+</Button>
            <Button variant="danger">-</Button>
        </section>
    );
};

export default Contador;