import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='container'>
            <div className="banner-area">
                <div className="content-area">
                    <h1>
                        Welcome to <span>Visa Master!</span>
                    </h1>
                    <p>
                        Hi! This is <b>Jonathan Lukeman</b> . I am a professional lawyer with experience of over 10 years. I have been successfully working in this field with the success rate of hundred in hundred. Imigration visa, student visa, non-imigrant visa and a lot of services are provided by me. If you feel that you need any kind of law support, I am the right person you could think about. Just do take an appointment and we will solve it together.
                        
                    </p>
                    <Link to='/about'>
                        <button className="content-btn">Learn More</button>
                    </Link>
                </div>
                <div className="img-area">
                    <img src="lawyer.png" alt="lawyer-img" />
                </div>
            </div>
        </div>
    );
};

export default Banner;