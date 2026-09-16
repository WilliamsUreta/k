import { Container, Row } from "react-bootstrap";
import noticias from "../data/Noticias";
import NoticiaCard from "../components/organisms/NoticiasCard";

function Noticias() {
    return (
       <Container className="text-left text-white">
            <h2 className="text-center"> Noticias </h2>
            <Row className="justify-content-center">
                {noticias.map((noticias) => (
                    <NoticiaCard key={noticias.id} noticias={noticias}/>
                ))}
            </Row>
        </Container>
    );
}

export default Noticias;
