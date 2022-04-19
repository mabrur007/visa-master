import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, description, price } = service;
    
    const navigate = useNavigate();
    const navigateToCheckOut = () => {
        navigate('/checkout');
    }
    return (
        <div className='service'>
            <img src={img} alt="img" />
            <h2 className='mt-3'>{name}</h2>
            <p>Processing Fees: <b>${ price}</b></p>
            <p><small>{description}</small></p>
            <button onClick={navigateToCheckOut} className='btn btn-warning d-block mx-auto'>Check Out</button>
        </div>
        
    );
};

export default Service;