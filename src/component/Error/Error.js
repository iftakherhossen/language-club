import React from 'react';
import './Error.css';

const Error = () => {
    const handleHomeBtn = () => {

    }

    return (
        <div className="text-center m-5">
            <h1 className="text-danger error-txt">404</h1>
            <h3>Oops! Page Not Found!</h3>
            <p className="mb-3"></p>
            <button onClick={handleHomeBtn} className="btn rounded-pill mt-4 mb-5 error-btn fw-bold">Return Home</button>
        </div>
    );
};

export default Error;