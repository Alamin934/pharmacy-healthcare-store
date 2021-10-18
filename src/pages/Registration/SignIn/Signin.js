import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png';
import '../SignUp/Signup.css';

const Signin = () => {
    const { handleEmailChange, handlePasswordChange, handleSignIn, error, signInUsingGoogle, setError, signInUsingFacebook } = useAuth();
    let history = useHistory();
    let location = useLocation();
    let redirect_uri = location.state?.from || '/';
    const handleGoogleSignin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                setError('');
            }).catch(error => {
                setError(error.message);
            })
    }
    const handleFacebookSignin = () => {
        signInUsingFacebook()
            .then(result => {
                history.push(redirect_uri);
                setError('');
            }).catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="py-5 text-center" id="signUp">
            <Container>
                <div>
                    <img src={logo} width="230" alt="" />
                </div>
                <Row>
                    <Col md={7} className="mx-auto mt-5">
                        <Form onSubmit={handleSignIn}>
                            <FloatingLabel label="Email" className="mb-3">
                                <Form.Control type="email" placeholder="Email" onBlur={handleEmailChange} />
                            </FloatingLabel>

                            <FloatingLabel label="Password" className="mb-3">
                                <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} />
                            </FloatingLabel>

                            <div className="d-grid mt-3">
                                <Button type="submit" style={{ background: '#fd1e1e', border: 'none' }} variant="secondary" size="lg">Sign In</Button>
                                <NavLink to="/signup" className="account">New User? Create an account.</NavLink>
                            </div>
                        </Form>
                        {/* Error Message */}
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        {/* Third Party login system*/}
                        <div className="mt-4">
                            <button type="submit" className="btn btn-light fw-bold" onClick={handleGoogleSignin}>
                                <img src="https://i.ibb.co/pKfFv9L/google-logo.png" style={{ width: '25px' }} alt="" /> Google Signin
                            </button>
                            <button type="submit" className="btn btn-light m-2 fw-bold" onClick={handleFacebookSignin}>
                                <img src="https://i.ibb.co/gJHRWZq/facebook.jpg" style={{ width: '25px' }} alt="" /> Facebook Signin
                            </button>
                            <button type="submit" className="btn btn-light fw-bold" onClick={handleGoogleSignin}>
                                <img src="https://i.ibb.co/JdFvSXq/github.png" style={{ width: '25px' }} alt="" /> GitHub Signin
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signin;