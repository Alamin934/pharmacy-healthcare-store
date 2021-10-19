import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, setUser, logOut } = useAuth();

    let history = useHistory();
    let redirect_uri = '/';
    /* REDIRECT TO HOME PAGE BY LOG OUT */
    const handleLogOut = () => {
        logOut()
            .then(() => {
                history.push(redirect_uri);
                setUser({});
            })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="light">
                <Container>
                    {/* HEADER LOGO */}
                    <Navbar.Brand className="ms-0">
                        <Nav.Link as={NavLink} to="/" className="fw-bold fs-4">Pharma Store</Nav.Link>
                    </Navbar.Brand>
                    {/* NAVBAR START */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* NAVBAR ITEMS */}
                        <Nav className="ms-auto text-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
                            {!user.email ?
                                /* SIGN IN & SIGN UP LINK */
                                <span className="d-block d-md-flex ">
                                    <Nav.Link as={NavLink} to="/signin" className="">SignIn</Nav.Link>
                                    <Nav.Link as={NavLink} to="/signup" className="">SignUp</Nav.Link>
                                </span>
                                /* LOG OUT BUTTON & USER NAME */
                                : <span className="d-block d-md-flex align-items-center">
                                    <button type="button" className="btn btn-success mx-2" onClick={handleLogOut}>Log Out</button>
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