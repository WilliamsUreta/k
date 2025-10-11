import { Container} from "react-bootstrap";
import perfil from "../data/Perfil";
import Image from "../components/atoms/Images";
import "../styles/Perfil.css";

function Perfil() {
    return (
        <Container className="text-center text-white" id="Perfil">
            <Image src={perfil.foto} atl = "Perfil" className="rounded-circle  m-2 p-2 w-25" />
                <h1 className="text-4xl font-bold">{perfil.nombre}</h1>
                    <p>Estudiante de informática Duoc UC | Entusiasta de la Tecnología</p>
                    <p>Bienvenido a mi portafolio personal donde comparto mis proyectos y noticias recientes. ¡Explora y conoce más sobre mi trabajo!</p>
                    
            <div  className="d-flex " id="Logos">
                <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzEkaAN0BJ2o3ri2IsQRKXVk6ejQQqz0GUg&s" 
                    alt="GitLogo" 
                    className="rounded-circle m-2 p-2 w-5"
                />
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png" 
                    alt="Facebook" 
                    className="rounded-circle m-2 p-2 w-5"
                />
                <Image 
                    src="https://cms-b-assets.familysearch.org/dims4/default/7cbb963/2147483647/strip/true/crop/1528x1532+0+0/resize/499x500!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2Ff7%2Fef%2Fdc357483053270013e4948e10f76%2Ftwitterbird.png" 
                    alt="Twitter" 
                    className="rounded-circle m-2 p-2 w-5"
                />
            </div>
        </Container>
    );
}

export default Perfil;