import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './HomeService.css';

const HomeService = (props) => {
    /* RECEIVE DATA & DISTRUCTURING */
    const { id, urlImage, name, price, description } = props.service;
    /* HANDLE FUNCTION FOR GO SERVICE DETAILS PAGE */
    const history = useHistory();
    const handleServiceDetail = () => {
        history.push(`/service/${id}`);
    }
    return (
        <div id="home-service">
            <Col>
                <Card className="py-4 border-0 shadow">
                    <Row>
                        {/* CARD IMAGE */}
                        <Col xs={12} md={5} lg={4} className="my-auto d-flex justify-content-center">
                            <Card.Img className="img-fluid" src={urlImage} />
                        </Col>
                        {/* CARD TEXT */}
                        <Col xs={12} md={7} lg={8}>
                            <Card.Body>
                                <Card.Title className="fs-4">{name}</Card.Title>
                                <Card.Text className="fst-italic mb-2">{description.slice(0, 55)}</Card.Text>
                                <Card.Text className="fw-bold fs-5">$ {price}</Card.Text>
                                <Button onClick={handleServiceDetail} className="btn-success">See More <FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </div>
    );
};

export default HomeService;