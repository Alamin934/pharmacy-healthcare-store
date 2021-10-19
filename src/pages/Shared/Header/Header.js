import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="light">
                <Container>
                    <Navbar.Brand className="ms-0">
                        <Nav.Link as={NavLink} to="/" className="fw-bold fs-4">Pharma Store</Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
                            {!user.email ?
                                <span className="d-block d-md-flex ">
                                    <Nav.Link as={NavLink} to="/signin" className="">SignIn</Nav.Link>
                                    <Nav.Link as={NavLink} to="/signup" className="">SignUp</Nav.Link>
                                </span>
                                : <span className="d-block d-md-flex align-items-center">
                                    <button type="button" className="btn btn-success mx-2" onClick={logOut}>Log Out</button>
                                    <span className="fw-bold">{user.displayName}</span>
                                </span>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;