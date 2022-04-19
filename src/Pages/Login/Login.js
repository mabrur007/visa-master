import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import toast from 'react-hot-toast';
import google from '../../images/google.png';
import './Login.css';
import Loader from '../Shared/Loader/Loader';

const Login = () => {
    const [signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle,
        googleUser,
        googleLoading
    ] = useSignInWithGoogle(auth);

    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    //it will show success messagae when user is logged in
    useEffect(() => {
        if (user?.user?.email || googleUser?.user?.email) {
            toast.success('Logged In!', {
                duration: 4000,
                id: 'login'
            });

            setTimeout(() => {
                navigate(from, { replace: true });
                return;
            }, 1000);
        }
    }, [user, navigate, from, googleUser]);

    // Handling Login form
    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        // Checking Validity
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        // Taking Input Field Values
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Creating Account With Email & Password
        await signInWithEmailAndPassword(email, password);

        // Reset Form
        setValidated(false);
    };

    // Giving Loading Effect 
    if (loading || googleLoading) {
        return <Loader></Loader>;
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 px-4">
                        <Form noValidate validated={validated} onSubmit={handleLogin}>
                            <h2 className="title">Login</h2>
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
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please, Enter your Password!
                                </Form.Control.Feedback>
                                <div className='mt-2'>
                                    <Link to='/reset-password'>Forgot Password?</Link>
                                </div>
                            </Form.Group>

                            <button className='btn btn-warning text-white w-100 mb-3 fw-bold fs-5' type="submit">Login</button>
                            <Link className='text-center d-block' to="/register">Don't have account? <span>Register</span></Link>
                            {error && <strong className='text-danger d-block text-center mt-1'>
                                {
                                    error?.message.includes('wrong-password') ? 'Wrong Password! Try to remember password.' : 'User Not Found! Please, Create account!'
                                }
                            </strong>}

                            <div className="divider">
                                <span></span>
                                <p>Or</p>
                                <span></span>
                            </div>

                            <button type='button' onClick={() => signInWithGoogle()} className='social-login-btn'>
                                <img src={google} alt="Sign In With Google" />
                                Continue With Google
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;