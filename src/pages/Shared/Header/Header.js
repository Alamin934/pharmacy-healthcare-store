import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const style = {
        color: "#58d2b0",
        borderBottom: "3px solid #58d2b0"
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="light">
                <Container>
                    <Navbar.Brand className="ms-0">
                        <Nav.Link as={NavLink} to="/">Pharma Store</Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link activeStyle={style} as={NavLink} to="/">Home</Nav.Link>
                            <span className="d-block d-md-flex ">
                                <Nav.Link activeStyle={style} as={NavLink} to="/signin" className="">SignIn</Nav.Link>
                                <Nav.Link activeStyle={style} as={NavLink} to="/signup" className="">SignUp</Nav.Link>
                            </span>
                            <span className="d-block d-md-flex align-items-center">
                                <button type="button" className="btn btn-success mx-2">Log Out</button>
                                <span className="fw-bold">UserName</span>
                            </span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;