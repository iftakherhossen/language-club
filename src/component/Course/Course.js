import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Course = (props) => {
    const { title, description, fee, duration } = props.course;

    return (
        <div>
            <Container>
                <Row xs={1} className="g-4 m-0">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="fs-3">{title}</Card.Title>
                                <Card.Text>{description}</Card.Text>
                                <h5>Course Duration: {duration}</h5>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <h4 className="mt-2">Course Fee: {fee}</h4>
                                <button className="btn red-font text-white rounded-pill px-4">Join Now</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;