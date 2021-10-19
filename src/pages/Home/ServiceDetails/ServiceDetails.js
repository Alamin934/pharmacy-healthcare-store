import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const { services } = useServices();
    const [signleSerivecs, setSignleSerivecs] = useState({});

    useEffect(() => {
        const serviceDetails = services?.find(service => service.id === serviceId);
        setSignleSerivecs(serviceDetails);
    }, [serviceId, services]);

    return (
        <div className="py-5" id="service-details">
            <Container>
                <Row className="">
                    <Col xs={12} md={8}>
                        <div className="hover border p-3 rounded w-75">
                            <img className="img-fluid" src={signleSerivecs?.urlImage} alt="" />
                        </div>
                        <h2 className="display-6 fw-bold mt-4">{signleSerivecs?.name}</h2>
                        <p className="fst-italic text-muted" style={{ width: '80%' }}>{signleSerivecs?.description}</p>
                        <h5>({signleSerivecs?.rate})</h5>
                        <h2 className="mt-3 fw-bold">$ {signleSerivecs?.price}</h2>
                        <button className="btn btn-success btn-lg px-4 mt-4"><span className="me-2"><FontAwesomeIcon icon={faShoppingCart} /> </span>Add To Cart</button>
                    </Col>
                    <Col xs={12} md={4} className="border-start">
                        <div>
                            <ul class="list-group list-group-flush mx-2">
                                <li class="list-group-item">
                                    <h4 className="text-center fw-bold">Order Summary</h4>
                                </li>
                                <li class="list-group-item">
                                    <h5 className="mb-0">Items Ordered: 0</h5>
                                </li>
                                <li class="list-group-item">
                                    <h6 className="mb-0">Total Price: 0</h6>
                                </li>
                                <li class="list-group-item">
                                    <h6 className="mb-0">Tax: 0</h6>
                                </li>
                                <li class="list-group-item border-bottom">
                                    <h6 className="mb-0">Total: 0</h6>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;