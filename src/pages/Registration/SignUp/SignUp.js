import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const { handleEmailChange, handlePasswordChange, handleRegistration, handleNameChange, error } = useAuth();
    return (
        <div className="py-5 text-center" id="signUp">
            <Container>
                <Row>
                    <Col md={6} className="mx-auto mt-5">
                        <Form onSubmit={handleRegistration}>
                            {/* INPUT NAME FILED */}
                            <FloatingLabel
                                label="Name" className="mb-3">
                                <Form.Control type="text" placeholder="Name" onBlur={handleNameChange} required />
                            </FloatingLabel>
                            {/* INPUT EMAIL FIELD */}
                            <FloatingLabel
                                label="Email" className="mb-3">
                                <Form.Control type="email" placeholder="Email" onBlur={handleEmailChange} required />
                            </FloatingLabel>
                            {/* INPUT EMAIL FIELD */}
                            <FloatingLabel label="Password" className="mb-3">
                                <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} required />
                            </FloatingLabel>
                            {/*SUBMIT BUTTON */}
                            <div>
                                <Button variant="btn btn-success d-block mb-3" size="lg" type="submit">Sign Up</Button>
                                <NavLink to="/signin">Already have an account?</NavLink>
                            </div>
                            {/*ERROR ALERT */}
                            {error && <div className="mt-2 alert alert-danger" role="alert">{error}</div>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;