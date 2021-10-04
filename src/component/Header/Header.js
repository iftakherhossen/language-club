import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <Navbar bg="secondary" expand="lg">
                    <Container>
                        <h1><NavLink to="/home" className="text-white fw-bold text-decoration-none fs-2 p-0 pb-2">Language Club</NavLink></h1>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                    <NavLink to="/home" className="text-white p-2 fs-5 text-decoration-none fw-bold btn-hover">Home</NavLink>
                                    <NavLink to="/course" className="text-white p-2 fs-5 text-decoration-none fw-bold btn-hover">Course</NavLink>
                                    <NavLink to="/admission" className="text-white p-2 fs-5 text-decoration-none fw-bold btn-hover">Admission</NavLink>
                                    <NavLink to="/about" className="text-white p-2 fs-5 text-decoration-none fw-bold btn-hover">About</NavLink>
                                    <NavLink to="/contact" className="text-white p-2 fs-5 text-decoration-none fw-bold btn-hover">Contact</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
};

export default Header;