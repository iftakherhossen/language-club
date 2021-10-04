import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = (props) => {
    const { title, description, fee, duration } = props.course;

    return (
        <div>
            <Container>
                <Row xs={1} md={1} className="g-4 m-0">
                    <Col>
                        <Card className="card-bg">
                            <Card.Body>
                                <Card.Title className="fs-2">{title}</Card.Title>
                                <Card.Text>{description}</Card.Text>
                                <h5>Course Duration: {duration} Month</h5>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between align-items-center">
                                <h4 className="mt-1">Course Fee: {fee} <sup className="fs-6 text-danger fw-bolder">20% Discount</sup></h4>
                                <Link to="/admission">
                                    <button className="btn red-font text-white rounded px-4">Enroll Now</button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;