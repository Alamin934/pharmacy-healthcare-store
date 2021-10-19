import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const CovidInfo = () => {
    return (
        <div>
            <Container>
                <Row className="d-flex align-items-center g-4">
                    <Col xs={12} md={6} className="text-center">
                        <img src="https://i.ibb.co/sHGBZJ6/covid-sect.jpg" alt="" className="img-fluid" />
                    </Col>
                    {/* COVID 19 INFO DETAILS */}
                    <Col xs={12} md={6} className="mb-4 mb-md-0">
                        <h5>INFORMATION</h5>
                        <h2 className="fw-bold display-5">COVID-19</h2>
                        <p className="mt-3 fst-italic">Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. <br /> Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention.<br />Older people and those with COVID-19 and become seriously ill or die at any age.<br />The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads.<br />Protect yourself and others from infection properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.</p>
                        <Button className="btn-success px-5 py-2">See More <FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CovidInfo;