import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import arabicPoster from './images/arabic.png';
import spanishPoster from './images/spanish.png';
import englishPoster from './images/english.png';


const Service = () => {
    return (
        <div>
            <Container>
                <Row xs={1} className="g-4">
                    {/* Offer */}
                    <Col className="d-flex">
                        <Card className="w-100 text-center card-bg">
                            <Card.Body>
                                <Card.Title className="fs-4 text-danger">Spring Offer</Card.Title>
                                <Card.Text className="fw-bold">Get 20% Discount at All Courses</Card.Text>
                                <Link to="/course">
                                    <button className="btn red-font text-white px-3">See Details</button>
                                </Link>
                            </Card.Body>
                            <Card.Footer className="text-muted">Till 10 November!</Card.Footer>
                        </Card>
                    </Col>

                    {/* Card */}
                    <h2 className="text-center">Popular Course</h2>
                    <Col className="d-flex">
                        <Card className="mx-5 my-0">
                            <Card.Img variant="top" src={arabicPoster} />
                            <Card.Body>
                                <Card.Title className="fs-4">Arabic Course</Card.Title>
                                <Card.Text>Arabic language courses help international students gain entry onto a vocational course, foundation programme or undergraduate degree. Courses can last from one week or up to a year, and teaching incorporates the key skills of reading, writing, speaking and listening.</Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <h5 className="mt-1">Course Fee: 5500</h5>
                                <Link to="/course">
                                    <button className="btn red-font text-white">See Details</button>
                                </Link>
                            </Card.Footer>
                        </Card>
                        <Card className="mx-5 my-0">
                            <Card.Img variant="top" src={englishPoster} />
                            <Card.Body>
                                <Card.Title className="fs-4">English Course</Card.Title>
                                <Card.Text>English language courses help international students gain entry onto a vocational course, foundation programme or undergraduate degree. Courses can last from one week or up to a year, and teaching incorporates the key skills of reading, writing, speaking and listening.</Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <h5 className="mt-1">Course Fee: 4500</h5>
                                <Link to="/course">
                                    <button className="btn red-font text-white">See Details</button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="d-flex mb-3">
                        <Card className="mx-5 mt-0">
                            <Card.Img variant="top" src={spanishPoster} />
                            <Card.Body>
                                <Card.Title className="fs-4">Spanish Course</Card.Title>
                                <Card.Text>Spanish language courses help international students gain entry onto a vocational course, foundation programme or undergraduate degree. Courses can last from one week or up to a year, and teaching incorporates the key skills of reading, writing, speaking and listening.</Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <h5 className="mt-1">Course Fee: 5500</h5>
                                <Link to="/course">
                                    <button className="btn red-font text-white">See Details</button>
                                </Link>
                            </Card.Footer>
                        </Card>
                        <Card className="mx-5 mt-0">
                            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5a9850b95417fc1f5c48bde0/1520253161100-GYGD45OEANG3JMJV4XK7/Chinese+Language+Course+in+Dhaka.png?format=1000w" />
                            <Card.Body>
                                <Card.Title className="fs-4">Chinese Course</Card.Title>
                                <Card.Text>Chinese language courses help international students gain entry onto a vocational course, foundation programme or undergraduate degree. Courses can last from one week or up to a year, and teaching incorporates the key skills of reading, writing, speaking and listening.</Card.Text>
                            </Card.Body>
                            <Card.Footer className=" d-flex justify-content-between">
                                <h5 className="mt-1">Course Fee: 5500</h5>
                                <Link to="/course">
                                    <button className="btn red-font text-white">See Details</button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <div className="text-center mt-4">
                    <Link to="/course">
                        <button className="btn red-font text-white rounded-pill px-4 fs-5">See All Course</button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Service;