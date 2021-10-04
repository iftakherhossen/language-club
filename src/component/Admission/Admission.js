import React from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admission = () => {
    return (
        <div>
            <Container>
            <div className="d-flex justify-content-around">
                <div className="text-start my-5">
                    <h2>Admission Details</h2>
                    <h5 className="mt-3 ms-3">We Start 4 Batch  in a Year</h5>
                    <h5 className="mt-3 ms-3">We have separate class for each course</h5>
                    <h5 className="mt-3 ms-3">We have 5 Instructor for on course</h5>
                    <h5 className="mt-3 ms-3">For Any Details <Link to="/contact" className="text-decoration-none">Contact</Link> With Us!</h5>
                    <h5 className="mt-3 ms-3">We will call you with all details after your submission!</h5>
                </div>
                <div className="text-center mt-5">
                    <h2>Fill the Form For Admission</h2>
                    <Form className="d-flex flex-column align-items-center mt-4 fw-bold">
                        <FloatingLabel controlId="floatingName" label="Name" className="mb-3 w-100">
                            <Form.Control type ="text" placeholder="Name" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 w-100">
                            <Form.Control type ="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3 w-100">
                            <Form.Control type ="tel" placeholder="Phone" />
                        </FloatingLabel>
                            <FloatingLabel controlId="floatingSelect" label="Works with selects" className="mb-3 w-100">
                            <Form.Select aria-label="Floating label select example" className="fw-bold">
                                <option>Select Course</option>
                                <option value="1">Arabic Course</option>
                                <option value="2">Bangla Course</option>
                                <option value="3">Chinese Course</option>
                                <option value="4">English Course</option>
                                <option value="5">French Course</option>
                                <option value="6">Hindi Course</option>
                                <option value="7">Japanese Course</option>
                                <option value="8">Korean Course</option>
                                <option value="9">Spanish Course</option>
                            </Form.Select>
                        </FloatingLabel>
                        <button className="red-font rounded-pill btn px-3 text-white fw-bold">Enroll Course</button>
                    </Form>
                </div>
            </div>
            </Container >
        </div >
    );
};

export default Admission;