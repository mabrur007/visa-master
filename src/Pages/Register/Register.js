import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    
    return (
        <div className='register'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 px-4">
                        <Form>
                            <h2 className="title">Register</h2>
                            <Form.Group className="mb-3" controlId="validationName">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Please, Enter your name!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationEmail">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    autoComplete="username"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Please, Enter valid Email Address!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationPassword">
                                <Form.Control
                                    type="password"
                                    name="password"
                                    pattern=".{8,}"
                                    placeholder="Password (min 8 characters)"
                                    autoComplete="current-password"
                                    required
                                />
                                
                            </Form.Group>

                            <button className='btn btn-warning text-white fs-5 fw-bold w-100 mb-3' type="submit">Register</button>
                            <Link className='text-center d-block mb-3' to="/login">Already registered? <span>Login</span></Link>
                            
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;