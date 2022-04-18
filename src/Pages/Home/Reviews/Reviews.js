import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
    
    return (
        <div className='container mt-8'>
            <h2 className='text-center'>Clients <span>FeedBack</span></h2>
            <div className='review-section mt-4'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;