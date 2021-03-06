import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const { handleEmailChange, handlePasswordChange, handleRegistration, handleNameChange, error } = useAuth();
    return (
        <div className="py-5 text-center" id="signUp">
            <Container>
                <h2 className="fw-bold display-6 text-center pb-3">Please <span className="text-succes">Sign Up</span></h2>
                <Row>
                    <Col md={6} className="mx-auto">
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
                            <div className="d-flex">
                                <NavLink to="/signin">Already have an account?</NavLink>
                            </div>
                            {/*SUBMIT BUTTON */}
                            <Button variant="btn btn-success d-block mt-3" size="lg" type="submit">Sign Up</Button>
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