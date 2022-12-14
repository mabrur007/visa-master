import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase_init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <header>
            <Navbar collapseOnSelect className='bg py-2' expand="lg" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                    <b className='fs-3'>Visa Master</b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className="btn btn-light" onClick={() => signOut(auth)}>Sign Out</button>
                                    :
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>    
            </Navbar>
        </header>
    );
};

export default Header;