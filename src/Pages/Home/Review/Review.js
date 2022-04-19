import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { img, name, says} = review;

    return (
        <div className="container">
            <div className='review shadow-lg'>
                <img src={img} alt="reviewer" />
                <h4>{name}</h4>
                <p> {says}</p>
            </div>
        </div>
    );
};

export default Review;