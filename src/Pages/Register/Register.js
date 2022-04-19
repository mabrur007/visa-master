import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import Loader from '../Shared/Loader/Loader';
import './Register.css';

const Register = () => {
    const [createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    // When User Is Created it will take it to home
    useEffect(() => {
        if (user?.user?.email) {
            toast.success('Email Verification Sent!', {
                duration: 4000,
                id: 'verification'
            }
            );

            setTimeout(() => {
                navigate('/', { replace: true });
                return;
            }, 1000);
        }
    }, [user, navigate]);

    // Handle Registration
    const handleRegistration = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        // Check Validity
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        //Retrive Input Value
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Create Account
        await createUserWithEmailAndPassword(email, password, { sendEmailVerification: true });
        await updateProfile({ displayName: name });

        // Reset Form
        setValidated(false);
    };

    if (loading || updating) {
        return <Loader></Loader>
    }
    
    return (
        <div className='register'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 px-4">
                        <Form noValidate validated={validated} onSubmit={handleRegistration}>
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
                            
                            {error && <strong className='text-danger d-block text-center mt-2'>
                                {
                                    error?.message.includes('already') ? 'Email Already Exists!' : 'Something Went Wrong!'
                                }
                            </strong>}
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;