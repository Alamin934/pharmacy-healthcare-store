import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const { services } = useServices();
    return (
        <div className="py-5 bg-light">
            <Container>
                <div>
                    <h2 className="fw-bold display-6 text-center">Our <span className="text-succes">Services</span></h2>
                </div>
                <Row xs={1} md={1} lg={2} className="g-4 my-4">
                    {/* DATA PASS TO SERVICE PAGE */}
                    {
                        services.slice(0, 6)?.map(service => <HomeService
                            key={service.id}
                            service={service}
                        />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeServices;