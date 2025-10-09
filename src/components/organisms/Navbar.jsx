import { Navbar, Nav, Container} from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" className='p-4 me-auto' >
            <Container>
                <Navbar.Brand >Mi Portafolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link >Introduccion</Nav.Link>
                        <Nav.Link >Proyectos</Nav.Link>
                        <Nav.Link >Noticias</Nav.Link>
                        <Nav.Link >Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;