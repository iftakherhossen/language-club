import React from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Container>
                <h2 className="text-center mt-4">Contact Information</h2>
                <div className="d-flex justify-content-between m-4">
                    <div className="w-50">
                        <h3>Office Location</h3>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700311872784!2d90.34510366942551!3d23.794582086915813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1633366049332!5m2!1sen!2sbd" className="w-75 height"></iframe>
                        </div>
                    </div>
                    <div className="w-50">
                        <h3>For Any Query </h3>
                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com"/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                        <Form.Control type ="password" placeholder="Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mb-3">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '120px' }}
                            />
                        </FloatingLabel>
                        <button className="red-font rounded-pill btn px-4 text-white fw-bold">Send</button>
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default Contact;