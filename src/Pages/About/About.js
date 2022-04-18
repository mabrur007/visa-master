import React from 'react';
import './About.css';
import myImg from '../../images/my-img.png';

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="row justify-content-evenly align-items-center gy-4">
                    <div className="col-lg-4 shadow rounded">
                        <img src={myImg} className="img-fluid" alt="Mabrur" />
                    </div>

                    <div className="col-lg-6">
                        <h2>Mir Md Mabrur</h2>
                        <p>
                            Hello there! I am an entusiast web designer. In my heart I believe that learning is a endless game. Everyday is a new learning in every aspects of our life. So to become a good front end developer, I am always thursty to learn new technology no matter how hard the topic is. I am willing to give my <b>100%</b> to succeed in tech career.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;