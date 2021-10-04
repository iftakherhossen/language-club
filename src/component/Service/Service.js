import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Service = () => {
    return (
        <div>
            <Row xs={1} className="g-4">
                <Col className="d-flex">
                    <Card className="w-100 text-center">
                        <Card.Body>
                            <Card.Title className="fs-4 text-danger">Spring Offer</Card.Title>
                            <Card.Text className="fw-bold">Get 20% Discount at All Courses</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn red-font text-white px-3">See Details</button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col className="d-flex">
                    <Card className="w-100">
                        <Card.Body>
                            <Card.Title className="fs-4">Arabic Course</Card.Title>
                            <Card.Text>Arabic language courses help international students gain entry onto a vocational course, foundation programme or undergraduate degree. Courses can last from one week or up to a year, and teaching incorporates the key skills of reading, writing, speaking and listening.</Card.Text>
                            <h5 className="mt-1">Course Fee: 5500</h5>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn red-font text-white">See Details</button>
                        </Card.Footer>
                    </Card>
                    <Card className="w-100">
                        <Card.Body>
                            <Card.Title className="fs-4">Bangla Course</Card.Title>
                            <Card.Text>Bangla language courses help international students gain entry onto a vocational course, foundation programme or undergraduate degree. Courses can last from one week or up to a year, and teaching incorporates the key skills of reading, writing, speaking and listening.</Card.Text>
                            <h5 className="mt-1">Course Fee: 3500</h5>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn red-font text-white">See Details</button>
                        </Card.Footer>
                    </Card>
                    <Card className="w-100">
                        <Card.Body>
                            <Card.Title className="fs-4">Hindi Course</Card.Title>
                            <Card.Text>Hindi language courses help international students gain entry onto a vocational course, foundation programme or undergraduate degree. Courses can last from one week or up to a year, and teaching incorporates the key skills of reading, writing, speaking and listening.</Card.Text>
                            <h5 className="mt-1">Course Fee: 4500</h5>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn red-font text-white">See Details</button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col className="d-flex">
                    <Card className="w-100">
                        <Card.Body>
                            <Card.Title className="fs-4">French Course</Card.Title>
                            <Card.Text>French language courses help international students gain entry onto a vocational course, foundation programme or undergraduate degree. Courses can last from one week or up to a year, and teaching incorporates the key skills of reading, writing, speaking and listening.</Card.Text>
                            <h5 className="mt-1">Course Fee: 5500</h5>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn red-font text-white">See Details</button>
                        </Card.Footer>
                    </Card>
                    <Card className="w-100">
                        <Card.Body>
                            <Card.Title className="fs-4">Spanish Course</Card.Title>
                            <Card.Text>Spanish language courses help international students gain entry onto a vocational course, foundation programme or undergraduate degree. Courses can last from one week or up to a year, and teaching incorporates the key skills of reading, writing, speaking and listening.</Card.Text>
                            <h5 className="mt-1">Course Fee: 5500</h5>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn red-font text-white">See Details</button>
                        </Card.Footer>
                    </Card>
                    <Card className="w-100">
                        <Card.Body>
                            <Card.Title className="fs-4">Chinese Course</Card.Title>
                            <Card.Text>Chinese language courses help international students gain entry onto a vocational course, foundation programme or undergraduate degree. Courses can last from one week or up to a year, and teaching incorporates the key skills of reading, writing, speaking and listening.</Card.Text>
                            <h5 className="mt-1">Course Fee:5500</h5>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn red-font text-white">See Details</button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Service;