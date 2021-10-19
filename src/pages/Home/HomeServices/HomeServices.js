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
                    <h2 className="text-center">Our Services</h2>
                </div>
                <Row xs={1} md={2} lg={2} className="g-4 my-4">
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