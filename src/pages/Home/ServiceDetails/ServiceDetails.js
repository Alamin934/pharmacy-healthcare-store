import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ReactStars from 'react-stars';
import useServices from '../../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const { services } = useServices();
    const [signleSerivecs, setSignleSerivecs] = useState({});

    useEffect(() => {
        const serviceDetails = services?.find(service => service.id === serviceId);
        setSignleSerivecs(serviceDetails);
    }, [serviceId, services]);
    /* REACT START RATING */
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return (
        <div className="py-5" id="service-details">
            <Container>
                <Row className="g-4">
                    {/* SERVICE PRODUCT DETAILS */}
                    <Col xs={12} md={8}>
                        <div className="hover border p-3 rounded img-width">
                            <img className="img-fluid" src={signleSerivecs?.urlImage} alt="" />
                        </div>
                        <h2 className="display-6 fw-bold mt-4">{signleSerivecs?.name}</h2>
                        <p className="fst-italic text-muted card-description mb-0" style={{ width: '80%' }}>{signleSerivecs?.description}</p>
                        <div>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={30}
                                value={signleSerivecs?.rate}
                                color2={'#ffc107'} />
                        </div>
                        <h2 className=" fw-bold">$ {signleSerivecs?.price}</h2>
                        <button className="btn btn-success btn-lg px-4 mt-4"><span className="me-2"><FontAwesomeIcon icon={faShoppingCart} /> </span>Add To Cart</button>
                    </Col>
                    {/* CART */}
                    <Col xs={12} md={4} className="border-start">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-light">
                                    <h4 className="text-center fw-bold m-2 text-succes">Order Summary</h4>
                                </li>
                                <li className="list-group-item">
                                    <h6 className="mb-0">Items Ordered: 0</h6>
                                </li>
                                <li className="list-group-item">
                                    <h6 className="mb-0">Price: $0</h6>
                                </li>
                                <li className="list-group-item">
                                    <h6 className="mb-0">Tax: $0</h6>
                                </li>
                                <li className="list-group-item">
                                    <h5 className="mb-0 fw-bold">Total: $0</h5>
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