import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center not-found">
            <img src="https://i.ibb.co/6DckJ3y/404.jpg" className="w-50 mx-auto d-block" alt="" />
            <Nav.Link as={Link} to="/home">
                <button className="btn btn-success py-2 my-4">Back to Home</button>
            </Nav.Link>
        </div>
    );
};

export default NotFound;