import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer bg-light">
            {/* FOOTER WIDGET PART */}
            <div>
                <Container className="py-5">
                    <Row>
                        {/* FOOTER WIDGET FIRST COL */}
                        <Col xs={12} md={4}>
                            <div className="text-center text-md-start">
                                <h2 className="fw-bold">Pharma Store</h2>
                                <p className="mb-0"><small>Pharma is the clinical health science that links medical science with chemistry and it is charged with the discovery, production, disposal, safe</small></p>
                            </div>
                        </Col>
                        {/* FOOTER WIDGET SECOND COL */}
                        <Col xs={12} md={4} className="my-3 my-md-0 d-flex justify-content-center">
                            <Nav className="flex-column text-center text-md-start">
                                <Nav.Link className="fw-bold fs-5 mb-1">Support</Nav.Link>
                                <Nav.Link href="#" className="">Technical Support</Nav.Link>
                                <Nav.Link href="#" className="">Return Goods Policy</Nav.Link>
                                <Nav.Link href="#" className="">Documnets & Forms</Nav.Link>
                            </Nav>
                        </Col>
                        {/* FOOTER WIDGET THIRD COL */}
                        <Col xs={12} md={4} className="d-flex justify-content-center">
                            <Nav className="flex-column text-center text-md-start">
                                <Nav.Link className="fw-bold fs-5 mb-1">Products</Nav.Link>
                                <Nav.Link href="#" className="">Incontinence Care</Nav.Link>
                                <Nav.Link href="#" className="">Pharma & Nutritions</Nav.Link>
                                <Nav.Link href="#" className="">Infactions Preventions</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
                {/* FOOTER COPY RIGHT PART */}
                <div className="bg-dark">
                    <Row>
                        <Col>
                            <p className="text-light text-center my-3">Copyright &copy; 2021 Pharma Store. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    );
};

export default Footer;