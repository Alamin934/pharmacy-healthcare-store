import { faInfoCircle, faMoneyBill, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="py-5" id="about-us">
            {/* ABOUT US */}
            <Container>
                <Row>
                    <Col>
                        {/* SOME STORE DETAILS */}
                        <div className="pb-5 w-75 mx-auto about">
                            <h2 className="fw-bold display-6">About <span className="text-succes">Pharma Store</span></h2>
                            <p className="text-muted fst-italic">Welcome to Pharma Store, a convenient way for you to order commoneveryday medical and personal care items. Our team is made up of clinicians, researchers, financial experts and 1,200 direct sales representatives with outstanding expertise. They know the healthcare business from the bottom up and top down. <br />We’re happy to help. If you have any questions regarding a product or an order, please feel free to reach out to us at info@admin.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* WHY CHOOSE US */}
            <Container className="text-center">
                <div className="pb-5">
                    <h2 className="fw-bold display-6"><span className="text-succes">Why</span> Choose Us</h2>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {/* SUPPORT */}
                    <Col>
                        <div className="shadow p-4">
                            <h1 className="text-succes">
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </h1>
                            <h4 className="fw-bold">24/7 Support</h4>
                            <p className="text-muted">We will give you 24/7 support service that is provided 24 hours a day and 7 days a week.</p>
                        </div>
                    </Col>
                    {/* SHIPPING */}
                    <Col>
                        <div className="shadow p-4">
                            <h1 className="text-succes">
                                <FontAwesomeIcon icon={faTruck} />
                            </h1>
                            <h4 className="fw-bold">Free Shipping</h4>
                            <p className="text-muted">If you buy more than $300 from us then you will get free shipping your product</p>
                        </div>
                    </Col>
                    {/* REFUND */}
                    <Col>
                        <div className="shadow p-4">
                            <h1 className="text-succes">
                                <FontAwesomeIcon icon={faMoneyBill} />
                            </h1>
                            <h4 className="fw-bold">Refund Anytime</h4>
                            <p className="text-muted">You can take anytime Refund from us by valid reasons, Like if our product is damaged.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;