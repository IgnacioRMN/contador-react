import { Button } from "react-bootstrap";


const Contador = (props) => {
    return (
        <section className="text-center">
            <h2 >Contador: {props.infoComision}</h2>
            <p className="lead">1</p>
            <Button className="me-2">+</Button>
            <Button variant="danger">-</Button>
        </section>
    );
};

export default Contador;