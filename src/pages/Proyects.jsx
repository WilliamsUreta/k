import { Container, Row } from "react-bootstrap";
import proyectos from "../data/proyectos";
import ProyectCard from "../components/organisms/ProyectCard";

function Proyectos(){
    return (
        <Container className="text-center text-white">
            <h2 className="text-center"> Proyectos </h2>
            <Row className="justify-content-center">
                {proyectos.map((proyectos) => (
                    <ProyectCard key = {proyectos.id} proyectos={proyectos} />
                ))}
            </Row>
        </Container>
    );
}

export default Proyectos;