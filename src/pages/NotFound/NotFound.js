import React from 'react';
import { NavLink } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className="text-center">
            <img src="https://i.ibb.co/6DckJ3y/404.jpg" className="w-50 mx-auto d-block" alt="" />
            <NavLink to="/home">
                <button className="btn btn-success py-2 my-4">Back to Home</button>
            </NavLink>
        </div>
    );
};

export default NotFound;