import { Button } from "react-bootstrap";


const Contador = () => {
    return (
        <section className="text-center">
            <h2 >Contador</h2>
            <p className="lead">1</p>
            <Button className="me-2">+</Button>
            <Button variant="danger">-</Button>
        </section>
    );
};

export default Contador;