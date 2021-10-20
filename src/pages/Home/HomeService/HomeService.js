import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './HomeService.css';
import ReactStars from 'react-stars';

const HomeService = (props) => {
    /* RECEIVE DATA & DISTRUCTURING */
    const { id, urlImage, name, price, description, rate } = props.service;
    /* HANDLE FUNCTION FOR GO SERVICE DETAILS PAGE */
    const history = useHistory();
    const handleServiceDetail = () => {
        history.push(`/service/${id}`);
    }
    /* REACT START RATING */
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return (
        <div id="home-service">
            <Col>
                <Card className="py-4 border-0 shadow">
                    <Row>
                        {/* CARD IMAGE */}
                        <Col xs={12} md={5} lg={4} className="pe-md-0">
                            <Card.Img className="img-fluid" src={urlImage} />
                        </Col>
                        {/* CARD TEXT */}
                        <Col xs={12} md={7} lg={8}>
                            <Card.Body className="pt-md-0">
                                <Card.Title className="fs-4">{name}</Card.Title>
                                <Card.Text className="fst-italic mb-0">{description.slice(0, 55)}</Card.Text>
                                <div>
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={30}
                                        value={rate}
                                        color2={'#ffc107'} />
                                </div>
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