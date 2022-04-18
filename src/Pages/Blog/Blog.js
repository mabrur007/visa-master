import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <div className="container">
                <h2 className='text-center mb-3'>My <span>Blog</span></h2>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>1. Difference between Authorization and Authentication</Accordion.Header>
                                <Accordion.Body>
                                    Authentication process is a process where the identity of a user is checked for giving him permission to access any system. On the other hand, In authorization process, a person or a user's authorities are checked for giving access to the resources. In generel authentication is done before the authorization process. Later on the authorization process is done or executes.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>2. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                                <Accordion.Body>
                                    Firebae provides a lot of authentication system in one place. The documentation is very easy to follow and implement various authentication. That's why I am using firebase. There are a lot of third-party authentication service provider such as okta, Auth0, OneLogin and JumpCloud.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>3. What other services does Firebase provide other than Authentication?</Accordion.Header>
                                <Accordion.Body>
                                    There are many services provided by firebase, most useful of them are:
                                    <ul>
                                        <li>Hosting</li>
                                        <li>Google Analytics</li>
                                        <li>Cloud Firestore</li>
                                        <li>Cloud Storage</li>
                                        <li>Cloud Functions</li>
                                        <li>Predictions</li>
                                        <li>Cloud Messaging</li>
                                        <li>Dynamic Links</li>
                                        <li>Remote Config</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;