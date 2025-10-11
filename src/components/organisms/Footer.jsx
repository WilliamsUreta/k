import { CardFooter } from "react-bootstrap";

function Footer() {
    return (
        <CardFooter className="text-center bg-dark text-white me-auto p-5 mt-16">
            &copy; {new Date().getFullYear()} Williams Ureta. Todos los derechos reservados.
        </CardFooter>
    );
}
export default Footer;