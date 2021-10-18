import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png';
import './Signup.css';

const SignUp = () => {
    const { handleEmailChange, handlePasswordChange, handleRegistration, handleNameChange, error } = useAuth();
    return (
        <div className="py-5 text-center" id="signUp">
            <Container>
                <div>
                    <img src={logo} width="230" alt="" />
                </div>
                <Row>
                    <Col md={7} className="mx-auto mt-5">
                        <Form onSubmit={handleRegistration}>
                            <FloatingLabel
                                label="Name" className="mb-3">
                                <Form.Control type="text" placeholder="Name" onBlur={handleNameChange} />
                            </FloatingLabel>

                            <FloatingLabel
                                label="Email" className="mb-3">
                                <Form.Control type="email" placeholder="Email" onBlur={handleEmailChange} />
                            </FloatingLabel>

                            <FloatingLabel label="Password" className="mb-3">
                                <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} />
                            </FloatingLabel>

                            {/* <FloatingLabel label="Confirm Password">
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </FloatingLabel> */}
                            <div className="d-grid mt-3">
                                <Button style={{ background: '#fd1e1e', border: 'none' }} variant="secondary" size="lg" type="submit">Sign Up</Button>
                                <NavLink to="/signin" className="account">Already have an account?</NavLink>
                            </div>
                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;