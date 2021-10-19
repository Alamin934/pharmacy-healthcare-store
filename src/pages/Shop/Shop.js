import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './Shop.css';

const Shop = () => {
    const { services } = useServices();
    return (
        <div className="py-5" id="shop">
            <Container>
                <h2 className="fw-bold display-6 text-center pb-5">Welcome To <span className="text-succes">Pharma Store</span></h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {services?.map(service =>
                        <Col key={service.name}>
                            <Card className="py-4 border-0 shadow">
                                {/* CARD IMAGE */}
                                <Card.Img className="w-75 mx-auto" src={service.urlImage} />
                                {/* CARD TEXT DETAILS */}
                                <Card.Body>
                                    <Card.Title className="fs-4">{service.name}</Card.Title>
                                    <Card.Text className="fst-italic mb-2">{service.description.slice(0, 55)}</Card.Text>
                                    <Card.Text className="fw-bold fs-5">$ {service.price}</Card.Text>
                                    <Link to={`/service/${service.id}`}>
                                        <Button className="btn-success">See More <FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Shop;