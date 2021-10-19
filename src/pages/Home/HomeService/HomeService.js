import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const HomeService = (props) => {
    const { id, urlImage, name, price, description } = props.service;

    const history = useHistory();
    const handleServiceDetail = () => {
        history.push(`/service/${id}`);
    }
    return (
        <div>
            <Col>
                <Card className="py-4 border-0 shadow">
                    <Row>
                        <Col md={4} className="my-auto">
                            <Card.Img variant="top" src={urlImage} />
                        </Col>
                        <Col md={8}>
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