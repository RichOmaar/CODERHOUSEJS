import react from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { FaShoppingCart,FaUser } from 'react-icons/fa';

export default function NavBar() {
    return (
        <div className="text_navbar">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        src="https://ariamor.com.mx/vista/assets/images/aria_logo_01.svg"
                        width="100"
                        // height="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#nosotros">NOSOTROS</Nav.Link>
                    <Nav.Link href="#shop">SHOP</Nav.Link>
                    <Nav.Link href="#contacto">CONTACTO</Nav.Link>
                    <Nav.Link href="#shoppingCart"><FaShoppingCart /></Nav.Link>
                    <Nav.Link href="#user"><FaUser /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}