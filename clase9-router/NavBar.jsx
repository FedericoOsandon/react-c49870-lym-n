// import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Tienda Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    
                    <NavLink className={( { isActive } ) => isActive ? 'btn btn-dark' : 'btn'} to='/'>Inicio</NavLink>

                    <NavLink className={( { isActive } ) => isActive ? 'btn btn-dark' : 'btn'} to='/category/gorras'>Gorras</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? 'btn btn-dark' : 'btn'} to='/category/remeras'>Remeras</NavLink>
                    {/* <Nav.Link href="#pricing">Remeras</Nav.Link> */}
                    {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                    {/* <a href></a> */}
                    <Link className="btn" to='/cart'>
                        <CartWidget />
                    </Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

