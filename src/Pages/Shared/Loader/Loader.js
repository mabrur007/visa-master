import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <Spinner animation="border" role="status">
            </Spinner>
        </div>
    );
};

export default Loader;