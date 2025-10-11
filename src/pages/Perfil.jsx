import { Container, Row } from "react-bootstrap";
import perfil from "../data/Perfil";
import Image from "../components/atoms/Images";
import handleGit from "./Github";
import "../styles/Perfil.css";

function Perfil() {
    return (
        <Container className="text-center text-white" id="Perfil">
            <Image src={perfil.foto} atl = "Perfil" className="rounded-circle  m-2 p-2 w-25" />
                <h1 className="text-4xl font-bold">{perfil.nombre}</h1>
                <p>Estudiante de informática Duoc UC | Entusiasta de la Tecnología</p>
            <button className="btn btn-primary" onClick={handleGit}>boton</button>
                <p>Bienvenido a mi portafolio personal donde comparto mis proyectos y noticias recientes. ¡Explora y conoce más sobre mi trabajo!</p>
        
        </Container>
    );
}

export default Perfil;