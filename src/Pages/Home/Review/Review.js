import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { img, name, says, ratings } = review;

    return (
        <div className='review shadow-lg'>
            <img src={img} alt="reviewer" />
            <h4>{name}</h4>
            <p> {says}</p>
            <p className='ratings'><span>Ratings:</span> <b>{ ratings}</b></p>
        </div>
    );
};

export default Review;