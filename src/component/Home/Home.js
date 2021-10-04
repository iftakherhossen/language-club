import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex align-items-center">
                    <div>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-language-course-4156196-3468625.png" alt="language" className="w-100 ms-0" />
                    </div>
                    <div>
                        <h1 className="skyblue-font fw-bold">Language Club</h1>
                        <p className="fw-bold">Where you can get all course at affordable price!</p>
                        <div>
                            <Link to="/admission">
                                <button className="btn red-font rounded-pill px-4 me-2 fw-bold text-white">Join Now</button>
                            </Link>
                            <Link to="/course">
                                <button className="btn red-font rounded-pill px-4 fw-bold text-white">All Course</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Service></Service>                
            </Container>
        </div>
    );
};

export default Home;