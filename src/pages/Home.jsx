import { Container } from "react-bootstrap";
import NavBar from "../components/organisms/Navbar";
import Footer from '../components/organisms/Footer';
import Proyects from "./Proyects";
import Noticias from "./Noticias";
import Perfil from "./Perfil";
import Contacto from "./Contacto";
import "../styles/Home.css";

function Home() {
    return (
        <>
            <NavBar />
            <Container className="justify-content-center" id="Teto">   
                <Perfil />
                <Proyects />
                <Noticias />
                <Contacto />    
            </Container>
            <Footer />
        </>  
    );
}

export default Home; 