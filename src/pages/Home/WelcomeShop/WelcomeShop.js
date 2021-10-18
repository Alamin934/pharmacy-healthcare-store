import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WelcomeShop = () => {
    return (
        <div className="py-5">
            <Container>
                <h2 className="fw-bold display-6 text-center pb-5"><span className="text-succes">Welcome</span> To Our Shop</h2>
                <Row className="pb-4">
                    <Col xs={12} md={6}>
                        <h2>Pharma Store help you find your medicine.</h2>
                        <p className="mt-3 fst-italic">Our Pharma store is the clinical health science that links medical science with chemistry and it is charged with the discovery, production, disposal, safe and effective use, and control of medications and drugs. The practice of Pharma requires excellent knowledge of drugs, their mechanism of action, side effects, interactions, mobility and toxicity. At the same time, it requires knowledge of treatment and understanding of the pathological process. Some specialties of pharmacists, such as that of clinical pharmacists, require other skills, e.g. knowledge about the acquisition and evaluation of physical and laboratory data.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="https://i.ibb.co/82qwVZS/hero-home-parrffvcxq6wcs1na3uy2shmu7wsok0e278foa6my8.jpg" alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WelcomeShop;