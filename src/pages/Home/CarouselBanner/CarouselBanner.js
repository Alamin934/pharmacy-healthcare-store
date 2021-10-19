import { Carousel } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './CarouselBanner.css';

const CarouselBanner = () => {
    return (
        <div id="home-carousel">
            <Carousel>
                <Carousel.Item interval={5000} className="carousel-item-1">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/NLXkLtw/slide2.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h1 className="display-4 fw-bold">We Help You</h1>
                            <h1 className="display-4 fw-bold">To Live A Healty Life</h1>
                            <h5>Getting for better health uontact us</h5>
                            <button className="btn btn-success mt-3 btn-lg"><span><FontAwesomeIcon icon={faAngleDoubleRight} /></span> See More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className="carousel-item-2">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/WvWBnV5/bg-slider2-1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h1 className="display-4 fw-bold">Welcome</h1>
                            <h1 className="display-4 fw-bold">A Better Way For Medicine</h1>
                            <h5>Getting for better health uontact us</h5>
                            <button className="btn btn-success mt-3 btn-lg"><span><FontAwesomeIcon icon={faAngleDoubleRight} /></span> See More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} className="carousel-item-3">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/zsV3sSp/slide1-2.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h1 className="display-4 fw-bold">Free Your Self</h1>
                            <h1 className="display-4 fw-bold">From All Disease</h1>
                            <h5>Getting for better health uontact us</h5>
                            <button className="btn btn-success mt-3 btn-lg"><span><FontAwesomeIcon icon={faAngleDoubleRight} /></span> See More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselBanner;