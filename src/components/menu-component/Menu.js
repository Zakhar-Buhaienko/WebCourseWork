import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";

const Menu = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ color: 'white' }}>VAIL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="mx-auto">

                        <Nav.Link href="/" className="nav-link mx-3" style={{ color: 'white', textDecoration: 'none', border: '1px solid transparent', padding: '10px', transition: 'border-color 0.3s ease', borderRadius: '10px' }}
                            onMouseEnter={(e) => e.target.style.borderColor = '#ffffff'}
                            onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="/basket" className="nav-link mx-3" style={{ color: 'white', textDecoration: 'none', border: '1px solid transparent', padding: '10px', transition: 'border-color 0.3s ease', borderRadius: '10px' }}
                            onMouseEnter={(e) => e.target.style.borderColor = '#ffffff'}
                            onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
                            Basket
                        </Nav.Link>
                        <Nav.Link href="/about" className="nav-link mx-3" style={{ color: 'white', textDecoration: 'none', border: '1px solid transparent', padding: '10px', transition: 'border-color 0.3s ease', borderRadius: '10px' }}
                            onMouseEnter={(e) => e.target.style.borderColor = '#ffffff'}
                            onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
