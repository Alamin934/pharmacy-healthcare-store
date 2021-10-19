import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signin = () => {
    const { handleEmailChange, handlePasswordChange, handleSignIn, error, signInUsingGoogle, setError, setUser } = useAuth();

    let history = useHistory();
    let location = useLocation();
    let redirect_uri = location.state?.from || '/';
    /* GOOGLE SIGNIN REDIRECT */
    const handleGoogleSignin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                setError('');
            }).catch(error => {
                setError(error.message);
            })
    }
    /* MANUALLY USER SIGNIN REDIRECT */
    const userSignin = () => {
        handleSignIn()
            .then(result => {
                history.push(redirect_uri);
                setUser(result.user);
                setError('');
            })
    }


    return (
        <div className="py-5 text-center" id="signUp">
            <Container>
                <h2 className="fw-bold display-6 text-center pb-3">Please <span className="text-succes">Sign In</span></h2>
                <Row>
                    <Col md={6} className="mx-auto">
                        <div>
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
                                <NavLink to="/signup">New User? Create an account.</NavLink>
                            </div>
                            {/*SUBMIT BUTTON */}
                            <Button onClick={userSignin} variant="btn btn-success d-block mt-3" size="lg" type="submit">Sign In</Button>
                        </div>
                        {/* Error Message */}
                        {error && <div className="alert alert-danger mt-2" role="alert">{error}</div>}
                        {/* Third Party login system*/}
                        <div className="mt-4">
                            <button type="submit" className="btn btn-light fw-bold" onClick={handleGoogleSignin}>
                                <img src="https://i.ibb.co/pKfFv9L/google-logo.png" style={{ width: '25px' }} alt="" /> Google Signin
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signin;