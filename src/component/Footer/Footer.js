import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="bg-secondary mt-5 mb-0">
                <Container>
                    <div className="p-2 text-white d-flex justify-content-between">
                        <div className="p-3 pb-4">
                            <h2 className="fw-bold">Language Club</h2>
                            <p>Where you can get all course at affordable price!</p>
                        </div>
                        <div className="p-4">
                            <img src="https://web.programming-hero.com/static/media/app-download.439edada.png" alt="App-Link" className="cursor-pointer" />
                        </div>
                    </div>
                    <p className="text-center text-white p-2 mb-0">© Iftakher Hossen 2022, a Programming Hero initiative.</p>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;